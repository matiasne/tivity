import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-filter-input',
  templateUrl: './search-filter-input.component.html',
  styleUrls: ['./search-filter-input.component.scss'],
})
export class SearchFilterInputComponent implements OnInit {

  @Input() arrayAll = []
  @Input() Parametros = []
  @Output() arrayResult = []
  
  
  constructor() { }

  ngOnInit() {}

}
