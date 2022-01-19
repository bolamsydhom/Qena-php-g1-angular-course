import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input()
  productItem!: Product;
 
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  onAddToCartPressed(){
    console.log('hamada');
    this.productService.itemAdded.emit(this.productItem);
    // this.productService.addItemToCart(this.productItem)
  }

}
