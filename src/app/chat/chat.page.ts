import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonContent, ModalController, NavParams } from '@ionic/angular';
import { AutosizeModule} from 'ngx-autosize'
import { Comentario } from '../models/comentario';
import { AuthenticationService } from '../Services/authentication.service';
import { ComentariosService } from '../Services/comentarios.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  public comentario:Comentario;

  @ViewChild(IonContent) content:IonContent
  
  @Input() objeto
  @Input() id
  private obs:any
  private mensajes =[];
  private user:any
  constructor(
    private authService:AuthenticationService,
    private comentariosService:ComentariosService ,
    private modalController:ModalController,
    private navParams:NavParams

  ) { 
    this.comentario = new Comentario()
    this.user = this.authService.getActualUser();
    this.user.id = this.authService.getUID();
    console.log(this.navParams.get('objeto')+" "+this.navParams.get('id'));
    this.comentariosService.setearPath(this.navParams.get('objeto'),this.navParams.get('id'));   
      this.obs = this.comentariosService.obtener().subscribe(data =>{
        data.forEach((item:any) =>{
          let agregar = true;
          this.mensajes.forEach(mensaje =>{
            if(mensaje.id == item.id){
              agregar = false
            }
          })
          console.log(agregar)
          if(agregar){
            this.mensajes.push(item)
          }
        })
        setTimeout(()=>{
          this.content.scrollToBottom(200)
        })   
      })
  }

  

  enviar(){   

    this.comentario.senderEmail = this.user.email;
    this.comentario.senderId = this.user.id;
    this.comentariosService.add(this.comentario).then(data=>{
      console.log(data);     
    })
    
  }

  cerrar(){
    this.modalController.dismiss()
  }
  
  ionViewDidEnter(){
   
  }
  ionViewDidLeave(){
    this.obs.unsubscribe();
  }

  ngOnInit() {
  }

}
