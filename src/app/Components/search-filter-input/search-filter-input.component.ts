import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Fuse from 'fuse.js'
import { CargaPorVozService } from 'src/app/Services/carga-por-voz.service';

@Component({
  selector: 'app-search-filter-input',
  templateUrl: './search-filter-input.component.html',
  styleUrls: ['./search-filter-input.component.scss'],
})
export class SearchFilterInputComponent implements OnInit {

  @Input() placeholder = "";
  @Input() arrayAll = []
  @Input() parametros = []
  private arrayResult = []  
  public palabraFiltro = "";

  @Output() resultado = new EventEmitter<any>();

  constructor(
    public cargaPorVoz:CargaPorVozService,
    public changeRef:ChangeDetectorRef,
  ) { 
    
    
  }

  ngOnInit() {
    
  }

  buscar(palabra){      

    if(palabra != ""){
      
      this.arrayResult = [];

      const options = {
        keys: this.parametros
      };
      
      const fuse = new Fuse(this.arrayAll, options);
      
      let result:any = fuse.search(palabra)

      result.forEach(element => {
        this.arrayResult.push(element.item)
      });
     
    }
    else{
      this.arrayResult = this.arrayAll
    }

    if(this.cargaPorVoz.reconociendoPorVoz)
      this.cargaPorVoz.reconociendoPorVoz = false;

    this.changeRef.detectChanges();

    console.log(this.arrayResult)
    this.resultado.emit(this.arrayResult);
  }

  
  reconocimientoPorVoz(){
    if(!this.cargaPorVoz.reconociendoPorVoz){
      this.cargaPorVoz.reconociendoPorVoz = true;
      this.cargaPorVoz.startReconocimiento().subscribe(matches=>{        
          let message = matches[0]; //Guarda la primera frase que ha interpretado en nuestra variable     
          this.buscar(message);        
        },
        (onerror) =>{
            if(onerror == 0){
               this.buscar("");
            } 
        }) 
    }else{
      this.cargaPorVoz.reconociendoPorVoz = false;
      this.cargaPorVoz.stopReconocimiento();
    }
  }

}
