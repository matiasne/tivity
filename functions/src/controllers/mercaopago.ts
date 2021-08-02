import {  Response } from "express";
const mercadopago = require('mercadopago');
const axios = require('axios')

export class MercadoPagoController {


    constructor() {

    }

    async getMercadoPago(req:any,db:any){
        let doc:any = await db.collection('mercadoPago').doc(req.body.comercioId).get()
        return doc.data()
    }

   

    async procesarPago(req:any,res:Response,db:FirebaseFirestore.Firestore){

        let dataMP:any = await this.getMercadoPago(req,db)

        mercadopago.configurations.setAccessToken(dataMP.access_token)

        const payment_data ={
            transaction_amount:Number(req.body.trnascationAmount),
            token:req.body.token,
            description:"req.body.description",
            installments:Number(req.body.installments),
            payment_method_id:req.body.paymentMethodId,
            issuer_id:req.body.issuer,
            application_fee:5,
            payer:{
                email:req.body.email,
                identification:{
                    type:req.body.docType,
                    number:req.body.docNumber
                }
            }
        }


        mercadopago.payment.save(payment_data).then((resp:any) =>{
            let data = {
                status: resp.body.status,
                status_detail:resp.body.status_detail,
                id:resp.body.id
            }
            return  res.status(200).send(data);
        },(err:any)=>{
            return  res.status(500).send(err);
        })
    }

    async marketplaceAuth(req:any,res:Response,db:FirebaseFirestore.Firestore){

        let authCode = req.query.code 
        let comercioId = req.query.state      

        console.log("!!!!!"+comercioId)

        comercioId = comercioId.substring(3,comercioId.length)

        console.log("!!!!!"+comercioId)


        let config = {
            headers: {
                'accept': 'application/json',
                'Content-Type' : 'application/x-www-form-urlencoded',
            }
        }    

        let data ={
            client_secret : "TEST-6782463642048642-082817-df25fdfc267d4f8d9ce2871387d7d935-177936789",
            grant_type:"authorization_code",
            code:authCode,
            redirect_uri:"https://us-central1-tivity-socialup.cloudfunctions.net/api/mercadopago/marketplaceAuth"
        }

        axios.post("https://api.mercadopago.com/oauth/token",data,config)
        .then(async (response:any) => {
                
           

            try{    
                
                

                await db.collection('mercadoPago').doc(comercioId).set(response.data)

                let respUserData = await axios.get("https://api.mercadopago.com/users/"+response.data.user_id)

                console.log(respUserData.data)
                let dataUser = respUserData.data;
                dataUser.publicKey = response.data.public_key 
                await db.collection('comercios').doc(comercioId).set({mercadoPago:dataUser},{merge:true})
                res.redirect('https://socialup.page.link/page')

            }
            catch(err){
                res.status(500).send(err);
                console.log(err)
            }
            

            

        }).catch((err:any) => {console.log(err)});
    }

    async marketplaceOK(req:any,res:Response,db:FirebaseFirestore.Firestore){       
        res.status(200).send("GRacias!!");
    }
}