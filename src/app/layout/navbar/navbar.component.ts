import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnChanges {

  cartIsOpen = false;
  @Input() theAddedProduct!: Product[];
  constructor() { 
    console.log('constructor');
    
  }

  ngOnChanges(){ 
    console.log('onChanges');
  }

  ngOnInit(): void {
    console.log('onInit');
    
  }

}
