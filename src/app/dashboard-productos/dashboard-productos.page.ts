import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { FormProductoPage } from '../form-producto/form-producto.page';

@Component({
  selector: 'app-dashboard-productos',
  templateUrl: './dashboard-productos.page.html',
  styleUrls: ['./dashboard-productos.page.scss'],
})
export class DashboardProductosPage implements OnInit {

  constructor(
    public router:Router,
    public modalController: ModalController,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  
  }

  ionViewDidEnter(){
  }
  
  

  async nuevo(){
    //this.router.navigate(['form-producto']);
    let modal = await this.modalController.create({
      component: FormProductoPage
    });  
    return await modal.present();
  }
}
