import { Component, OnInit } from '@angular/core';
import { isNumber } from 'util';
import { Item } from '../models/item';
import { CategoriasService } from '../Services/categorias.service';
import { CsvService } from '../Services/csv.service';
import { KeywordService } from '../Services/keyword.service';
import { ProductosService } from '../Services/productos.service';

@Component({
  selector: 'app-form-importar-catalogo-csv',
  templateUrl: './form-importar-catalogo-csv.page.html',
  styleUrls: ['./form-importar-catalogo-csv.page.scss'],
})
export class FormImportarCatalogoCsvPage implements OnInit {

  public header = []
  public data = []
  public item:Item;
  public itemKeys = [{
    name:"",
    index:""
  }]

  private categorias = []
  constructor(
    private csvService:CsvService,
    private categoriasService:CategoriasService,
    private keywordService:KeywordService,
    private productosService:ProductosService
  ) {
    this.item = new Item();
    Object.keys(this.item).forEach(key=>{
      let multiple = Array.isArray(this.item[key])?true:false;
      let ik ={
        name:key,
        index:null,
        multiple:multiple
      }
      this.itemKeys.push(ik);
      
    });
    console.log(this.itemKeys)

    this.categoriasService.list().subscribe(data=>{
      this.categorias = data;
    })
   }

  ngOnInit() {
    this.csvService.obsHeader().subscribe(data=>{
      this.header = data
    })

    this.csvService.obsData().subscribe(data=>{
      this.data = data
      console.log(this.data)
    })
  }

  uploadFile(files: FileList): void {
    this.csvService.getTextFormFile(files)
  }

  crearItems(){
   
    this.data.forEach(fila =>{
      let item = new Item();
      for(let i = 0;i < this.itemKeys.length; i++){
        if(this.itemKeys[i].index != null){
          if(Array.isArray(this.itemKeys[i].index)){
            for(let j =0; j< this.itemKeys[i].index.length;j++){
              if(fila[this.itemKeys[i].index[j]])
                item[this.itemKeys[i].name].push(fila[this.itemKeys[i].index[j]])
            }
          }
          /*else if(typeof this.itemKeys[i].index === 'number'){
            if(fila[this.itemKeys[i].index])
              item[this.itemKeys[i].name] = Number(fila[this.itemKeys[i].index])
          }
          else if(typeof this.itemKeys[i].index === 'boolean'){
            if(fila[this.itemKeys[i].index])
              item[this.itemKeys[i].name] = fila[this.itemKeys[i].index] === "true"
          }*/
          else{
            if(fila[this.itemKeys[i].index])
              item[this.itemKeys[i].name] = fila[this.itemKeys[i].index]
          }
          
        }
      }
      console.log(item)
      this.keywordService.agregarKeywords(item, [item.nombre,...item.categorias]);


      let newItem = new Item()
      newItem.asignarValores(item);

      item.categorias.forEach(cat=>{
        if(!this.categorias.includes(cat)){
          this.categoriasService.add(cat).then(data=>{
            console.log("Nueva categoría creada");
          })
        }
      })
      //verificar el tema categorias

      this.productosService.add(item).then(data=>{
        console.log("Nuevo Producot creado")
      })

      //guardar item



    })
  }
}
