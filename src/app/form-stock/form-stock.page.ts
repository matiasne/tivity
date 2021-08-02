import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Item } from '../models/item';
import { variacionStock } from '../models/variacionStock';
import { ProductosService } from '../Services/productos.service';
import { VariacionesStocksService } from '../Services/variaciones-stocks.service';
import { WoocommerceService } from '../Services/woocommerce/woocommerce.service';

@Component({
  selector: 'app-form-stock',
  templateUrl: './form-stock.page.html',
  styleUrls: ['./form-stock.page.scss'],
})
export class FormStockPage implements OnInit {
  
  public item:Item;
  public nuevoStock = 0;

  constructor(
    private productosService:ProductosService,
    private modalCtrl:ModalController,
    private navParams:NavParams,
    private variacionesStockService:VariacionesStocksService,
    private woocommerceService:WoocommerceService
  ) {
    this.item = new Item()
    this.item.asignarValores(this.navParams.get('item'));
  }

  ngOnInit() {

  }

  cancelar(){
    this.modalCtrl.dismiss();
  }

  guardar(){
    this.item.stock =  this.item.stock + this.nuevoStock;
    this.modalCtrl.dismiss();   

    this.productosService.update(this.item).then(data=>{
      console.log(data);      
      this.woocommerceService.setPart("products")
      this.woocommerceService.actualizarProductoInWC(this.item)
    });

    let vStock:variacionStock = new variacionStock();
    vStock.productoId = this.item.id;
    vStock.stock = this.item.stock;
    this.variacionesStockService.setPathProducto(this.item.id);
    
    this.variacionesStockService.add(vStock).then(resp =>{
      console.log("variacion Guardada");        
    })

    //guardar el registro del stock actual con fecha
  }

}
