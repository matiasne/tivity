import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { Comercio } from '../models/comercio';
import { ComerciosService } from '../Services/comercios.service';
import { LoadingService } from '../Services/loading.service';

declare var MercadoPago: any

@Component({
  selector: 'app-form-card-token',
  templateUrl: './form-card-token.page.html',
  styleUrls: ['./form-card-token.page.scss'],
})
export class FormCardTokenPage implements OnInit {

  

  public cardLogo = ""

  public tiposDocumentos= [];
  public tiposPagos = []

  public email ="mati@mati.com";
  public cupon ="";
  public cards: any;
  public cardNumber = "5031755734530604";
  public securityCode="123";
  public cardExpirationMonth="11";
  public cardExpirationYear="25";
  public cardholderName="Matias Negri";
  public docType="DNI";
  public identificationNumber="31809039";
  public paymentMethodId:any;
  public amount="0";
  public installments:any = [];
  public selectedInstallments = -1;
  public issuerId = 0;

  public user:any ="";
  paymetnDataForm: FormGroup;

  public comercio:Comercio

  public cardForm:any
  public mp:any

  constructor(
    private modalCtrl:ModalController,
    private comerciosService:ComerciosService,
    private loadingService:LoadingService,
    private navParams:NavParams,
    public changeRef:ChangeDetectorRef,
  ) { 

    this.comercio = new Comercio()
    this.comercio.asignarValores(this.comerciosService.getSelectedCommerceValue())
   
    

    this.mp = new MercadoPago("TEST-e8c27e9f-aae8-41eb-a89c-e7937c04cd6a",{locale: 'en-US',
    advancedFraudPrevention: true,})
   


  }

  ionViewDidEnter(){
    
    this.amount = this.navParams.get('amount').toString()
    
    this.cardForm = this.mp.cardForm({
      amount: this.amount,
      autoMount: true,
      processingMode: 'aggregator',
      form: {
          id: 'form-checkout',
          cardholderName: {
              id: 'form-checkout__cardholderName',
              placeholder: 'Cardholder name',
          },
          cardholderEmail: {
              id: 'form-checkout__cardholderEmail',
              placeholder: 'Email',
          },
          cardNumber: {
              id: 'form-checkout__cardNumber',
              placeholder: 'Card number',
          },
           cardExpirationMonth: {
              id: 'form-checkout__cardExpirationMonth',
              placeholder: 'MM'
          },
          cardExpirationYear: {
              id: 'form-checkout__cardExpirationYear',
              placeholder: 'YYYY'
          },
          securityCode: {
              id: 'form-checkout__securityCode',
              placeholder: 'CVV',
          },
          installments: {
              id: 'form-checkout__installments',
              placeholder: 'Total installments'
          },
          identificationType: {
              id: 'form-checkout__identificationType',
              placeholder: 'Document type'
          },
          identificationNumber: {
              id: 'form-checkout__identificationNumber',
              placeholder: 'Document number'
          },
          issuer: {
              id: 'form-checkout__issuer',
              placeholder: 'Issuer'
          }
      },
      callbacks: {
         onFormMounted: error => {
             if (error) return console.warn('Form Mounted handling error: ', error)
             console.log('Form mounted')
         },
         onFormUnmounted: error => {
             if (error) return console.warn('Form Unmounted handling error: ', error)
             console.log('Form unmounted')
         },
         onIdentificationTypesReceived: (error, identificationTypes) => {
             if (error) return console.warn('identificationTypes handling error: ', error)
             console.log('Identification types available: ', identificationTypes)
         },
         onPaymentMethodsReceived: (error, paymentMethods) => {
             if (error) return console.warn('paymentMethods handling error: ', error)
             console.log('Payment Methods available: ', paymentMethods)
         },
         onIssuersReceived: (error, issuers) => {
             if (error) return console.warn('issuers handling error: ', error)
             console.log('Issuers available: ', issuers)
             this.cardLogo = issuers[0].thumbnail
         },
         onInstallmentsReceived: (error, installments) => {
             if (error) return console.warn('installments handling error: ', error)
             console.log('Installments available: ', installments)
         },
         onCardTokenReceived: (error, data) => {
           if (error) return this.ErrorResponseHandler(error)
            console.log('Token available: ', data.token)
            
            if(this.amount == "0")
              this.modalCtrl.dismiss(data,'','modal-mp')
         },
         onSubmit: (event) => { //PAra pagar con cuotas
             event.preventDefault();
             const cardData = this.cardForm.getCardFormData();
             console.log(cardData)

             const ret={ 
              issuer:cardData.issuerId,
              installments: cardData.installments,
              transactionAmount: cardData.amount,
              paymentMethodId:cardData.paymentMethodId,
              token:cardData.token,
              email:cardData.cardholderEmail,
              identificationType:cardData.identificationType,
              identificationNumber:cardData.identificationNumber
            }
            
            console.log(ret)
            
            if(this.amount != "0")
              this.modalCtrl.dismiss(ret,'','modal-mp')
         },
         onFetching:(resource) => {
             console.log('Fetching resource: ', resource)

             // Animate progress bar
             const progressBar = document.querySelector('.progress-bar')
             progressBar.removeAttribute('value')

             return () => {
                 progressBar.setAttribute('value', '0')
             }
         },
     }
  })
  }

  async ngOnInit() {
    this.amount = this.navParams.get('amount')
    
    
    
  }

  ionViewDidLeave(){
    this.cardForm.unmount()
  }

  
  async cobrar () {
    this.cardForm.submit()
   }
  

async cargar () {
 this.cardForm.createCardToken()
}

cerrar(){
  this.modalCtrl.dismiss()
}

ErrorResponseHandler = (response) => {
  console.log(response)
  this.loadingService.dismissLoading()
  
    if(response[0].code === "205"){
      alert("Ingresa un número de tarjeta")
    }
    if(response[0].code === "E301"){
      alert("Numero de tarjeta inválido")
    }
    if(response[0].code === "E302"){
      alert("Código de seguridad inválido")        
    }
    if(response[0].code === "221"){
      alert("Ingresa nombre de propietario de la tarjeta")
      
    }
    return;
  

  
 
}


}
