import { AfipVoucher, EnumAfipConceptos, EnumAfipMoneda, EnumAfipPersonaJuridica, EnumAfipTiposComprobantes, EnumAfipTiposDocumentos, IvaItem } from "../models/afipVoucher";
import * as admin from 'firebase-admin';
import {  Response } from "express";

let os = require('os')
const Afip = require('@afipsdk/afip.js');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const bcrypt = require('bcrypt');
const fs = require('fs');
//const path = require('path');
//const fs = require('fs');

export class AfipController {

    constructor() {

    }

    async initAfip(req:any,db:any){
     
   
      let doc:any = await db.collection('afip').doc(req.user.comercioId).get()     
      
      

      try {
        if (fs.existsSync(os.tmpdir()+'/'+req.user.comercioId+req.user.ptoVenta+'.key')) {
          //file exists
          console.log("key SI existe")
        }
        else{
          console.log("key no existe")
          await fs.writeFile(os.tmpdir()+'/'+req.user.comercioId+req.user.ptoVenta+'.key', doc.data().key,function(err:any, result:any) {
            if(err) console.log('error', err);
          });
        }
      } catch(err) {
        console.error(err)
      }


      try {
        if (fs.existsSync(os.tmpdir()+'/'+req.user.comercioId+req.user.ptoVenta+'.pem')) {
          //file exists
          console.log("pem SI existe")
        }
        else{
          console.log("pem no existe")
          await fs.writeFile(os.tmpdir()+'/'+req.user.comercioId+req.user.ptoVenta+'.pem', doc.data().pem,function(err:any, result:any) {
            if(err) console.log('error', err);
          });
        }
      } catch(err) {
        console.error(err)
      }

      
      try{

        let TAfile = os.tmpdir()+'/TA-'+req.user.cuit+'-wsfe.json';
        if (!fs.existsSync(TAfile)){
          console.log("TA no existe") 
          if(doc.data().afipTA) {
            console.log("AfipTA existe")
            let data = JSON.stringify(doc.data().afipTA)
            await fs.writeFile(os.tmpdir()+'/TA-'+req.user.cuit+'-wsfe.json', data,function(err:any, result:any) {
              if(err) console.log('error', err);
            });
          }
          else{
            console.log("AfipTA no existe")
          }
        }
        else{
          console.log("TA existe") 
        }
        
      }catch(err) {
        console.error(err)
      }

      
      try{
        const afip = new Afip({ CUIT: req.user.cuit, cert: req.user.comercioId+req.user.ptoVenta+".pem",key: req.user.comercioId+req.user.ptoVenta+".key", res_folder: os.tmpdir(),ta_folder:os.tmpdir() });
        return afip;
      }
      catch(err){
        console.log(err)
      }  
      

      
     
    }

    prueba(req:any,res:Response,db:FirebaseFirestore.Firestore){
     return res.status(200).send("Prueba Ok!");
    }
  
    async registro(req:any,res:any,db:FirebaseFirestore.Firestore){     

      if(!req.body.comercioId){
        res.status(400).send({message:"Falta comercioId"});
        return null;
      }    
    
      if(!req.body.cuit){
        res.status(400).send({message:"Falta cuit"});
        return null;
      }

      if(!req.body.personaJuridica){
        res.status(400).send({message:"Falta Persona Jurídica"});
        return null;
      }

      if(!req.body.ptoVenta){
        res.status(400).send({message:"Falta el número de punto de Venta"});
        return null;
      }
    
      if(!req.body.password){
        res.status(400).send({message:"Falta password"});
        return null;
      }

      if(!req.body.pem){
        res.status(400).send({message:"Falta pem"});
        return null;
      }

      if(!req.body.key){
        res.status(400).send({message:"Falta key"});
        return null;
      }     
    
      let data = {
        comercioId:req.body.comercioId,
        cuit:req.body.cuit,
        personaJuridica:req.body.personaJuridica,
        ptoVenta:req.body.ptoVenta,
        password:"",
        pem:req.body.pem,
        key:req.body.key    
      } 
    
      await bcrypt.hash(req.body.password, saltRounds, (err:any, hash:any) => {
        
        if(err)
          return  res.status(500).send(err);
    
        data.password = hash
        const afipRef = db.collection('afip');
        afipRef.doc(data.comercioId).set(data);
    
        return  res.status(200).send("Registrado!");
      },(err:any)=>{
        return  res.status(500).send(err);
      })       
         
      return true;   
    }

    login(req:any,res:any,db:FirebaseFirestore.Firestore){

        let comercioId = req.body.comercioId;
        let password = req.body.password;
      
        console.log(comercioId)
        db.collection('afip').doc(comercioId).get().then((doc:any)=>{
      
          if(doc.exists){
            console.log(doc.data().cuit)
      
            bcrypt.compare(password, doc.data().password, function(err:any, result:any) {
      
              console.log(err)
              if(err !== undefined)
                return  res.status(500).send(err);
      
              if(result){     
                let token = jwt.sign({cuit:doc.data().cuit,comercioId:doc.data().comercioId,ptoVenta:doc.data().ptoVenta}, "claveSecretaDelToken");     
                return res.status(200).send({token:token});
              }
              else{
                return res.status(303).send("No autorizado");
              }               
            })
          }
          else{
            return res.status(400).send("Comercio no existe");
            return null
          }     
          return null
        }).catch(err=>{
          return  res.status(500).send(err);
        });
    }
      


    async status(req:any,res:any,db:FirebaseFirestore.Firestore){
             
        const afip:any = await this.initAfip(req,db)
        console.log("!!!###S")
        const serverStatus = await afip.ElectronicBilling.getServerStatus();
        console.log('Este es el estado del servidor:');
        return res.status(200).send(serverStatus);
                        
    }

    async voucherInfo(req:any,res:any,db:FirebaseFirestore.Firestore){
        const afip:any = await this.initAfip(req,db)
        const voucherInfo = await afip.ElectronicBilling.getVoucherInfo(1,1,6); //Devuelve la información del comprobante 1 para el punto de venta 1 y el tipo de comprobante 6 (Factura B)
        
        if(voucherInfo === null){
            console.log('El comprobante no existe');
            return res.status(400).send('El comprobante no existe');
        }
        else{
            console.log('Esta es la información del comprobante:');
            console.log(voucherInfo);
            return res.status(200).send({voucher:voucherInfo});
        }      	
            
    }

    async getLastVoucherNumber(req:any,res:any,db:FirebaseFirestore.Firestore){     
      
        const afip:any = await this.initAfip(req,db)
        const voucherInfo = await afip.ElectronicBilling.getLastVoucher(1,6); //Devuelve la información del comprobante 1 para el punto de venta 1 y el tipo de comprobante 6 (Factura B)
      
        if(voucherInfo === null){
          console.log('El comprobante no existe');
          return res.status(400).send('El comprobante no existe');
        }
        else{
          console.log('Esta es la información del comprobante:');
          console.log(voucherInfo);
          return res.status(200).send({voucher:voucherInfo});
        }   
            
    }

    async getLastVoucherInfo(req:any,res:any,db:FirebaseFirestore.Firestore){    
    
      const afip:any = await this.initAfip(req,db)
      const numero = await afip.ElectronicBilling.getLastVoucher(1,6); //Devuelve la información del comprobante 1 para el punto de venta 1 y el tipo de comprobante 6 (Factura B)
      const voucherInfo = await afip.ElectronicBilling.getVoucherInfo(numero,1,6); //Devuelve la información del comprobante 1 para el punto de venta 1 y el tipo de comprobante 6 (Factura B)
      if(voucherInfo === null){
          console.log('El comprobante no existe');
          return res.status(400).send('El comprobante no existe');
      }
      else{
          console.log('Esta es la información del comprobante:');
          console.log(voucherInfo);
          return res.status(200).send({voucher:voucherInfo});
      }         
       
    }

    async createVoucher(req:any,res:any,db:FirebaseFirestore.Firestore){
        const afip:any = await this.initAfip(req,db)
        //Aca debo obtener el último número de voucher getLastVoucher
        const lastVoucherNumber = await afip.ElectronicBilling.getLastVoucher(1,6); //Devuelve la información del ultimo voucher
        
        let voucher:AfipVoucher = new AfipVoucher();
        voucher.CantReg ="1";
        voucher.PtoVta = "1"; // Punto de venta
        voucher.CbteTipo = req.body.CbteTipo; //6,  // Tipo de comprobante (ver tipos disponibles) 
        voucher.Concepto = req.body.Concepto;//1,  // Concepto del Comprobante: (1)Productos, (2)Servicios, (3)Productos y Servicios
        voucher.DocTipo = req.body.DocTipo;//99, // Tipo de documento del comprador (99 consumidor final, ver tipos disponibles)
        voucher.DocNro = req.body.DocNro;//0,  // Número de documento del comprador (0 consumidor final)
        voucher.CbteDesde = lastVoucherNumber +1;// Número de comprobante o numero del primer comprobante en caso de ser mas de uno
        voucher.CbteHasta = lastVoucherNumber +1;// Número de comprobante o numero del último comprobante en caso de ser mas de uno
        voucher.CbteFch = parseInt(req.body.CbteFch.replace(/-/g, ''));//parseInt(date.replace(/-/g, '')), // (Opcional) Fecha del comprobante (yyyymmdd) o fecha actual si es nulo
        voucher.ImpTotal = req.body.ImpTotal;//121, // Importe total del comprobante
        voucher.ImpTotConc = req.body.ImpTotConc;//0,   // Importe neto no gravado
        voucher.ImpNeto = req.body.ImpNeto; //100, // Importe neto gravado
        voucher.ImpOpEx = req.body.ImpOpEx;//0,   // Importe exento de IVA
        voucher.ImpIVA = req.body.ImpIVA;//21,  //Importe total de IVA
        voucher.ImpTrib = req.body.ImpTrib;//0,   //Importe total de tributos
        voucher.MonId = req.body.MonId;//'PES', //Tipo de moneda usada en el comprobante (ver tipos disponibles)('PES' para pesos argentinos) 
        voucher.MonCotiz = req.body.MonCotiz;//1,     // Cotización de la moneda usada (1 para pesos argentinos)            
       
        if(req.body.iva.length > 0){
            req.body.iva.forEach((i:any) => {
                let iva = new IvaItem()
                iva.asignarValores(i)
                voucher.Iva.push(iva)
            });                    
        }              
    
        const respuesta = await afip.ElectronicBilling.createVoucher(voucher);    
        return res.status(200).send({CAE:respuesta['CAE'],CAEFchVto:respuesta['CAEFchVto']});         
          
        //CAE asignado el comprobante
        //Fecha de vencimiento del CAE (yyyy-mm-dd)
    }   

    createFacturaFromPedido(req:any,res:any,db:FirebaseFirestore.Firestore){
      try{
        console.log(req.user.comercioId+" "+req.body.pedidoId+" "+req.user.ptoVenta)
        let pedidoRef =  db.collection('comercios/'+req.user.comercioId+'/pedidos').doc(req.body.pedidoId)
        pedidoRef.get().then(async (doc:any)=>{
          if(doc.exists){
  
            let pedido:any = doc.data();
            pedido.id = doc.id;
  
            let voucherTipo = EnumAfipTiposComprobantes.facturaC;
            if(req.user.personaJuridica == EnumAfipPersonaJuridica.responsableInscripto){
              if(pedido.clientePersonaJuridica == EnumAfipPersonaJuridica.responsableInscripto){
                voucherTipo = EnumAfipTiposComprobantes.facturaA;
              }
  
              if(pedido.clientePersonaJuridica != EnumAfipPersonaJuridica.responsableInscripto){
                voucherTipo = EnumAfipTiposComprobantes.facturaB;
              }
            }
            

            const afip:any = await this.initAfip(req,db)    
            let puntoDeVenta = req.user.ptoVenta;      
            const voucherDate = parseInt(req.body.CbteFch.replace(/-/g, ''))          
            const lastVoucherNumber = await afip.ElectronicBilling.getLastVoucher(puntoDeVenta,voucherTipo); //Devuelve la información del ultimo voucher
            const voucherNumber = Number(lastVoucherNumber) +1;                    
            const voucher = this.createVoucherFromPedido(pedido,voucherNumber,voucherDate,voucherTipo,puntoDeVenta)
            let CbteLetra = "C";   
            try{
              const respuesta = await afip.ElectronicBilling.createVoucher(voucher);  
              console.log("respuesta")
              console.log(respuesta)
              

             
              if(voucherTipo == EnumAfipTiposComprobantes.facturaA){
                CbteLetra = "A";
              }
              else if(voucherTipo == EnumAfipTiposComprobantes.facturaB){
                CbteLetra = "B"
              }
              else if(voucherTipo == EnumAfipTiposComprobantes.facturaC){
                CbteLetra = "C"
              }

              let datos = {afipFactura:{CbteLetra:CbteLetra,CbteTipo:voucherTipo,CAE:respuesta['CAE'],CAEFchVto:respuesta['CAEFchVto']}}
              
              var writeOperation = await pedidoRef.set(datos,{merge:true})
              console.log(writeOperation)

              this.guardarArchivoTA(req.user.comercioId,req.user.cuit,db)
              return res.status(200).send({CbteTipo:voucherTipo, CAE:respuesta['CAE'], CAEFchVto:respuesta['CAEFchVto']});
    
              
            }
            catch(err){
              console.log("err")
              console.log(err)
              this.guardarArchivoTA(req.user.comercioId,req.user.cuit,db)
              return res.status(500).send({message:err.message});
            }

            
  
          }
          else{
            this.guardarArchivoTA(req.user.comercioId,req.user.cuit,db)
            res.status(200).send({message:"Pedido no existe"});
          }
        }).catch((err:any)=>{
          res.status(500).send(err);
          console.log(err)
          
        })
      }
      catch(err){
        console.log(err)
        res.status(500).send({message:err});
      }     
      
    }

    createNotaCreditoFromPedido(req:any,res:any,db:FirebaseFirestore.Firestore){
      try{
        console.log(req.user.comercioId+" "+req.body.pedidoId+" "+req.user.ptoVenta)
        let pedidoRef =  db.collection('comercios/'+req.user.comercioId+'/pedidos').doc(req.body.pedidoId)
        pedidoRef.get().then(async (doc:any)=>{
          if(doc.exists){
  
            let pedido:any = doc.data();
            pedido.id = doc.id;
  
            let voucherTipo = EnumAfipTiposComprobantes.notaCreditoA;
            if(pedido.afipFactura.voucherTipo == EnumAfipTiposComprobantes.facturaB){
              voucherTipo = EnumAfipTiposComprobantes.notaCreditoB;
            }
            if(pedido.afipFactura.voucherTipo == EnumAfipTiposComprobantes.facturaC){
              voucherTipo = EnumAfipTiposComprobantes.notaCreditoC;
            }
            
            const afip:any = await this.initAfip(req,db)    
            let puntoDeVenta = req.user.ptoVenta;      
            const voucherDate = parseInt(req.body.CbteFch.replace(/-/g, ''))          
            const lastVoucherNumber = await afip.ElectronicBilling.getLastVoucher(puntoDeVenta,voucherTipo); //Devuelve la información del ultimo voucher
            const voucherNumber = Number(lastVoucherNumber) +1;                    
            const voucher = this.createVoucherFromPedido(pedido,voucherNumber,voucherDate,voucherTipo,puntoDeVenta)
            
            try{
              const respuesta = await afip.ElectronicBilling.createVoucher(voucher);  
              console.log("respuesta")
              console.log(respuesta)
              
              let datos = {afipNotaCredito:{CbteTipo:voucherTipo,CAE:respuesta['CAE'],CAEFchVto:respuesta['CAEFchVto']}}
              
              var writeOperation = await pedidoRef.set(datos,{merge:true})
              console.log(writeOperation)

              this.guardarArchivoTA(req.user.comercioId,req.user.cuit,db)
              return res.status(200).send({CbteTipo:voucherTipo, CAE:respuesta['CAE'], CAEFchVto:respuesta['CAEFchVto']});
    
              
            }
            catch(err){
              console.log("err")
              console.log(err)
              this.guardarArchivoTA(req.user.comercioId,req.user.cuit,db)
              return res.status(500).send({message:err.message});
            }

            
  
          }
          else{
            this.guardarArchivoTA(req.user.comercioId,req.user.cuit,db)
            res.status(200).send({message:"Pedido no existe"});
          }
        }).catch((err:any)=>{
          res.status(500).send(err);
          console.log(err)
          
        })
      }
      catch(err){
        console.log(err)
        res.status(500).send({message:err});
      }     
      
    }

    guardarArchivoTA(comercioId:any,cuit:any,db:any){ //debido a que el archivo temp al finalizar la funcion desaparece lo guardamos en firestor y luego lo retomamos al iniciar afip
      let TAfile = os.tmpdir()+'/TA-'+cuit+'-wsfe.json';
      if (fs.existsSync(TAfile)) {
        console.log("Guardando archivo en documento")
        fs.readFile(TAfile,'utf-8',function(err:any, jsonData:any){
          if (err) throw err;    
          var content:any = JSON.parse(jsonData);          
          const afipRef = db.collection('afip');
          afipRef.doc(comercioId).set({afipTA:content}, {merge: true}).then((data:any)=>{
            console.log("guardado ok")
          });           
      });
      }         
      else{
        console.log("Aun no existe TA")
      }
    }
    

      

    createVoucherFromPedido(pedido:any,voucherNumber:any,voucherDate:any,voucherTipo:any,puntoDeVenta:any,FchServDesde = null,FchServHasta=null,FchVtoPago=null){
      let voucher:AfipVoucher = new AfipVoucher();    
      
      voucher.CantReg = "1";
      voucher.PtoVta = puntoDeVenta; // Punto de venta          
      voucher.CbteTipo = voucherTipo; //6,  // Tipo de comprobante (ver tipos disponibles) A B o C depende del tipo de persona juridica (viene del frontend)

      let concepto = EnumAfipConceptos.productos;
      let impNeto= "0";
      let impOpEx = "0";
      let impIVA = "0";
      let impTotal = "0"
      
      console.log("voucherTipo "+voucherTipo)
      console.log("total "+pedido.total)

      if(voucherTipo == EnumAfipTiposComprobantes.facturaC){ //Si  es factura C no debe cargar datos de iva
        impNeto = pedido.total
        impTotal = pedido.total
        impIVA = "0"
        delete voucher.Iva
      }
      else{  //Saco calculos del Iva para facturas tipo A y B

        if(pedido.productos.length > 0){           
          pedido.productos.forEach((item:any) => {
            console.log(item.nombre)
            impNeto += (Number(item.precioTotal) / (1+Number(item.impuestoPorcentaje))).toFixed(2)
            impIVA += (Number(impNeto) * Number(item.impuestoPorcentaje)).toFixed(2)
          });
        }
      
        if(pedido.servicios.length > 0){           
          pedido.servicios.forEach((item:any) => {
            impNeto += (Number(item.precioTotal) / (1+Number(item.impuestoPorcentaje))).toFixed(2)
            impIVA += (Number(impNeto) * Number(item.impuestoPorcentaje)).toFixed(2)
          });
        }
        
      
        impTotal = (Number(impNeto) + Number(impIVA)).toFixed(2);

        let iva = new IvaItem()
        iva.Id= "5";
        iva.BaseImp = impNeto;
        iva.Importe = impIVA;
        voucher.Iva.push(iva)

      }

      if(pedido.productos.length > 0){
        concepto = EnumAfipConceptos.productos;
      }

      if(pedido.servicios.length > 0){
        concepto = EnumAfipConceptos.servicios;
        voucher.FchServDesde 	= FchServDesde; // (Opcional) Fecha de inicio del servicio (yyyymmdd), obligatorio para Concepto 2 y 3
        voucher.FchServHasta= FchServHasta; // (Opcional) Fecha de fin del servicio (yyyymmdd), obligatorio para Concepto 2 y 3
        voucher.FchVtoPago= FchVtoPago; // (Opcional) Fecha de vencimiento del servicio (yyyymmdd), obligatorio para Concepto 2 y 3
      }
      
     
        if(pedido.productos.length > 0 && pedido.servicios.length > 0){
          concepto =  EnumAfipConceptos.productosServicios;
        }
                    

      let tipoDoc = EnumAfipTiposDocumentos.consumidorFinal;      
      
      if(pedido.clienteDoc != ""){
        if(pedido.clienteDocTipo=="CUIT"){
          tipoDoc = EnumAfipTiposDocumentos.cuit
        }
  
        if(pedido.clienteDocTipo=="CUIL"){
          tipoDoc = EnumAfipTiposDocumentos.cuil
        }
  
        if(pedido.clienteDocTipo=="DNI"){
          tipoDoc = EnumAfipTiposDocumentos.dni
        }
      }
      else{
        pedido.clienteDoc = "0";
      }
      

      voucher.Concepto = concepto;//1,  // Concepto del Comprobante: (1)Productos, (2)Servicios, (3)Productos y Servicios
      voucher.DocNro = pedido.clienteDoc;//0,  // Número de documento del comprador (0 consumidor final)
      voucher.DocTipo = tipoDoc;//99, // Tipo de documento del comprador (99 consumidor final, ver tipos disponibles)
      voucher.CbteDesde = voucherNumber;// Número de comprobante o numero del primer comprobante en caso de ser mas de uno
      voucher.CbteHasta = voucherNumber;// Número de comprobante o numero del último comprobante en caso de ser mas de uno
      voucher.CbteFch = voucherDate;//parseInt(date.replace(/-/g, '')), // (Opcional) Fecha del comprobante (yyyymmdd) o fecha actual si es nulo
                
      voucher.ImpTotal = impTotal;//121, // Importe total del comprobante
      voucher.ImpTotConc = "0";//0,   // Importe neto no gravado
      
      voucher.ImpNeto = impNeto; //100, // Importe neto gravado
      voucher.ImpOpEx = impOpEx;//0,   // Importe exento de IVA
      voucher.ImpIVA = impIVA;//21,  //Importe total de IVA
      voucher.ImpTrib = "0";//0,   //Importe total de tributos
      voucher.MonId = EnumAfipMoneda.pesos;//'PES', //Tipo de moneda usada en el comprobante (ver tipos disponibles)('PES' para pesos argentinos) 
      voucher.MonCotiz = "1";//1,     // Cotización de la moneda usada (1 para pesos argentinos)            
       
      console.log(voucher.ImpTotal+" = "+impNeto+" + "+impIVA)
      
      return voucher;
    }

    async salesPoint(req:any,res:any,db:FirebaseFirestore.Firestore){
      const afip:any = await this.initAfip(req,db)
      const salesPoints= await afip.ElectronicBilling.getSalesPoints();
      return res.status(200).send({salesPoints:salesPoints});	
    }

    async voucherTypes(req:any,res:any,db:FirebaseFirestore.Firestore){
      const afip:any = await this.initAfip(req,db)
      const voucherTypes = await afip.ElectronicBilling.getVoucherTypes();
      return res.status(200).send({voucherTypes:voucherTypes});	               
    }

    async conceptTypes(req:any,res:any,db:FirebaseFirestore.Firestore){
      const afip:any = await this.initAfip(req,db)
      const conceptTypes = await afip.ElectronicBilling.getConceptTypes();
      return res.status(200).send({conceptTypes:conceptTypes});   
    }

    async documentTypes(req:any,res:any,db:FirebaseFirestore.Firestore){
      const afip:any = await this.initAfip(req,db)
      const documentTypes  = await afip.ElectronicBilling.getDocumentTypes();
      return res.status(200).send({documentTypes:documentTypes }); 	              
    }

    async aloquotTypes(req:any,res:any,db:FirebaseFirestore.Firestore){

      const afip:any = await this.initAfip(req,db)
      const aloquotTypes  = await afip.ElectronicBilling.getAliquotTypes();
      return res.status(200).send({aloquotTypes :aloquotTypes  });   	     
    }

    async currenciesTypes(req:any,res:any,db:FirebaseFirestore.Firestore){

      const afip:any = await this.initAfip(req,db)
      const currenciesTypes = await afip.ElectronicBilling.getCurrenciesTypes();
      return res.status(200).send({currenciesTypes :currenciesTypes  });        
          
    }

    async optionTypes(req:any,res:any,db:FirebaseFirestore.Firestore){
      const afip:any = await this.initAfip(req,db)
      const optionTypes  = await afip.ElectronicBilling.getOptionsTypes();
      return res.status(200).send({optionTypes  :optionTypes   });   
            
    }

    async taxTypes(req:any,res:any,db:FirebaseFirestore.Firestore){
      const afip:any = await this.initAfip(req,db)
      const taxTypes = await afip.ElectronicBilling.getTaxTypes();
      return res.status(200).send({taxTypes :taxTypes});  
          
    }

    nuevoPedido(req:any,res:any,db:FirebaseFirestore.Firestore){

      if(req.body.status === "processing"){
          req.body["statusCobro"] = 1;           
      }
      else if(req.body.status === "completed"){
          req.body["statusCobro"] = 2 
      }
      else if(req.body.status === "cancelled"){
          req.body["statusCobro"] = 3
      }
      else if(req.body.status === "refunded"){
          req.body["statusCobro"] = 4
      }
  db.collection('comercios/'+req.query.comercioId+"/pedidosWoocommerce").doc(req.body.id.toString()).set(req.body).then((data:any)=>{
  
          console.log("pedidos guardado")    
  
  
          db.collection("comercios/"+req.query.comercioId+"/roles").where("rol","==","Administrador").get().then((querySnapshot) => {
              console.log("rol encontrado")
              querySnapshot.forEach((doc:any) => {
                  console.log(doc.id)
                  db.collection('users').doc(doc.id).get().then((doc:any) => {
                     
                      // doc.data() is never undefined for query doc snapshots
                      console.log(doc.data().notificationCelulartoken);
  
                              
                      var message ={
                          "token" : doc.data().notificationCelulartoken,
                          "notification" : {
                              "body" : "Se ha realizado un pedido desde tu página web",
                              "title": "Nuevo Pedido"
                          }
                      }
  
                      admin.messaging().send(message)
                      .then((response) => {
                          // Response is a message ID string.
                          console.log('Successfully sent message:', response);
                          return res.status(200).send({data:"fcm enviado"});
                      })
                      .catch((error) => {
                          console.log('Error sending message:', error);
                          return res.status(200).send({data:"Error enviando fcm"});
                      });           
                      return null;
                      //return res.status(200).send(response);
                  })
                  .catch((err) => {
                      return  res.status(500).send(err);
                  });          
              });
              return null
              //return res.status(200).send(response);
          })
          .catch((err) => {
              return  res.status(500).send(err);
          });
  
          return null;
      }).catch((err) => {
          return  res.status(500).send(err);
      });
  }
    
}