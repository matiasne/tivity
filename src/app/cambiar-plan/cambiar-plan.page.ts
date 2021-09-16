import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { FormCardTokenPage } from '../form-card-token/form-card-token.page';
import { ComerciosService } from '../Services/comercios.service';
import { LoadingService } from '../Services/loading.service';
import { MercadopagoService } from '../Services/mercadopago.service';

@Component({
  selector: 'app-cambiar-plan',
  templateUrl: './cambiar-plan.page.html',
  styleUrls: ['./cambiar-plan.page.scss'],
})
export class CambiarPlanPage implements OnInit {

  public text = "";
  public plan = "";

  constructor( 
    private modalCtrl:ModalController,
    private navParams:NavParams,
    private loadingService:LoadingService,
    private mercadoPagoService:MercadopagoService,
    private comerciosService:ComerciosService
  ) {

    this.text = this.navParams.get('extraText');
    this.plan = this.navParams.get('actualPlan');
   }

  ngOnInit() {
    //si el usuario es plan free mustra una cosa
    //si el usuario es plan spark muestra otra cosa
  }

  cerrar(){
    this.modalCtrl.dismiss()
  }

  async subsPlanA(){


    let modal = await this.modalCtrl.create({
      id:'modal-mp',
      component: FormCardTokenPage,
      componentProps: {
        amount:0, 
      }
    });

    
    modal.onDidDismiss()
      .then((retorno) => {
        if(retorno.data){
          const datos:any = {
            ...retorno.data,
            comercioId:this.comerciosService.getSelectedCommerceId()
          }
          this.loadingService.presentLoadingText("Cargando Pago")
          this.mercadoPagoService.subscripcionPlanAPago(datos).then(data=>{
            console.log(data)
            this.loadingService.dismissLoading()
            const response:any = data
            if(response.status == "approved"){      
                this.alertRealizado()     
            }
            else{
                this.alertRechazado()
    
            }
          },err=>{
            this.loadingService.dismissLoading()
            console.log(err)
          })
        }
                
    });
    
    return await modal.present();

    
  }

    
  async alertRealizado(){
    alert("Pago Realizado")
  }

  async alertRechazado(){
  alert("Pago Rechazado")
  }
}
