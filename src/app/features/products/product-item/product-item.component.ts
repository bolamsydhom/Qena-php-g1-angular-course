import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input()
  productItem!: Product;

  @Output()
  itemAdded: EventEmitter<Product> = new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
    // document.getElementById('tese').addEventListner('click',()=>{})
  }

  onAddToCartPressed(){
    console.log('hamada');
    this.itemAdded.emit(this.productItem)
  }

}
