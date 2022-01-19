import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productsArray!: Product[] ;
  @Output()
  itemAddedFromProductListComponent: EventEmitter<Product> = new EventEmitter<Product>();


  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productsArray = this.productService.getAllProducts();
  }

  onItemAdded(product: Product){
    console.log(product);
    
    this.itemAddedFromProductListComponent.emit(product);
  }

}