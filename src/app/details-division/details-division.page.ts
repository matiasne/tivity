import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-details-division',
  templateUrl: './details-division.page.html',
  styleUrls: ['./details-division.page.scss'],
})
export class DetailsDivisionPage implements OnInit {

 public divisionNombre:string
  constructor(
    private route:ActivatedRoute
  ) { 
    this.divisionNombre = this.route.snapshot.params.id;
    console.log(this.divisionNombre)
  }

  ngOnInit() {
  }

}
