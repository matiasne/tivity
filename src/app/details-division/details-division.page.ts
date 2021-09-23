import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Division } from '../models/subdivision';
import { NavegacionParametrosService } from '../Services/global/navegacion-parametros.service';

@Component({
  selector: 'app-details-division',
  templateUrl: './details-division.page.html',
  styleUrls: ['./details-division.page.scss'],
})
export class DetailsDivisionPage implements OnInit {

 public division:Division
  constructor(
    private navParametrosService:NavegacionParametrosService
  ) {  
    this.division = new Division();
    if(this.navParametrosService.param instanceof Division){
      this.division = this.navParametrosService.param
    }
  }

  ngOnInit() {
  }

}
