import {NextFunction, Request, Response, Router } from 'express';
import { AfipController} from './controllers/afip'
import { isAfipAuth,  } from './middleware/isAfipAuth';


export const routes = (app: Router, db: FirebaseFirestore.Firestore)=>{  
  
  let afipController = new AfipController()  

  app.post('/afip/prueba', (req: Request, res: Response) => {
    console.log(req.body)
    return afipController.prueba(req,res,db);
  });

  app.post('/afip/registro', (req: Request, res: Response,next:NextFunction) => {
    return afipController.registro(req,res,db);
  });

  app.post('/afip/login', (req: Request, res: Response) => {
    return afipController.login(req,res,db);
  });
  
  app.post('/afip/status', isAfipAuth, (req: Request, res: Response) => {
    return afipController.status(req,res,db);
  });

  app.post('/afip/voucherInfo',isAfipAuth, (req: Request, res: Response) => {
    return afipController.voucherInfo(req,res,db);
  });

  app.get('/afip/getLastVoucherInfo',isAfipAuth, (req: Request, res: Response) => {
    return afipController.getLastVoucherInfo(req,res,db);
  });

  app.post('/afip/createVoucher',isAfipAuth, (req: Request, res: Response) => {
    return afipController.createVoucher(req,res,db);
  });

  app.post('/afip/createFacturaFromPedido',isAfipAuth, (req: Request, res: Response) => {
    return afipController.createFacturaFromPedido(req,res,db);
  });

  app.post('/afip/createNotaCreditoFromPedido',isAfipAuth, (req: Request, res: Response) => {
    return afipController.createNotaCreditoFromPedido(req,res,db);
  });

  app.post('/afip/salesPoint',isAfipAuth, (req: Request, res: Response) => {
    return afipController.salesPoint(req,res,db);
  });

  app.post('/afip/voucherTypes',isAfipAuth, (req: Request, res: Response) => {
    return afipController.voucherTypes(req,res,db);
  });

  app.post('/afip/conceptTypes',isAfipAuth, (req: Request, res: Response) => {
    return afipController.conceptTypes(req,res,db);
  });

  app.post('/afip/documentTypes',isAfipAuth, (req: Request, res: Response) => {
    return afipController.documentTypes(req,res,db);
  });

  app.post('/afip/aloquotTypes',isAfipAuth, (req: Request, res: Response) => {    
    return afipController.aloquotTypes(req,res,db)
  });

  app.post('/afip/currenciesTypes',isAfipAuth, (req: Request, res: Response) => {
    return afipController.currenciesTypes(req,res,db);
  });

  app.post('/afip/optionTypes',isAfipAuth, (req: Request, res: Response) => {
    return afipController.optionTypes(req,res,db);
  });

  app.post('/afip/taxTypes',isAfipAuth, (req: Request, res: Response) => {
    return afipController.taxTypes(req,res,db);
  });

  app.post('/NuevoPedido', (req: Request, res: Response) => {
    return afipController.nuevoPedido(req,res,db);
    
  });

};