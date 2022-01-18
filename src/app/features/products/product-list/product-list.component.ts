import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productsArray: Product[] = [
    {
      name: 'Photo Camera',
      price: 100,
      discount: 10,
      imageUrl: 'https://picsum.photos/200/300',
      description: 'test',
    },
    {
      name: 'Camera',
      price: 200,
      discount: 30,
      imageUrl: 'https://picsum.photos/200/400',
      description: 'test',
    },
    {
      name: 'Mobile',
      price: 2000,
      imageUrl: 'https://picsum.photos/200/200',
      description: 'test',
    },
    {
      name: 'Car',
      price: 200000,
      imageUrl: 'https://picsum.photos/200/100',
      description: 'test',
    },
    {
      name: 'iPhone',
      price: 20000,
      discount: 30,
      imageUrl: 'https://picsum.photos/200/50',
      description: 'test',
    },
    {
      name: 'iPhone5',
      price: 20000,
      discount: 30,
      imageUrl: 'https://picsum.photos/200/50',
      description: 'test',
    },
    {
      name: 'iPhone1',
      price: 20000,
      discount: 30,
      imageUrl: 'https://picsum.photos/200/50',
      description: 'test',
    },
    {
      name: 'iPhone2',
      price: 20000,
      discount: 30,
      imageUrl: 'https://picsum.photos/200/50',
      description: 'test',
    },
    {
      name: 'iPhone4',
      price: 20000,
      discount: 30,
      imageUrl: 'https://picsum.photos/200/50',
      description: 'test',
    },
  ];
  @Output()
  itemAddedFromProductListComponent: EventEmitter<Product> = new EventEmitter<Product>();
  constructor() {}

  ngOnInit(): void {}

  onItemAdded(product: Product){
    console.log(product);
    
    this.itemAddedFromProductListComponent.emit(product);
  }

}