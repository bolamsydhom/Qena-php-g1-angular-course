import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../_models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  itemAdded: EventEmitter<Product> = new EventEmitter<Product>();

  productArray: Product[] = [
    {
      id: 1,
      name: 'Photo Camera',
      price: 100,
      discount: 10,
      imageUrl: 'https://picsum.photos/200/300',
      description: 'test',
    },
    {
      id: 2,
      name: 'Camera',
      price: 200,
      discount: 30,
      imageUrl: 'https://picsum.photos/200/400',
      description: 'test',
    },
    {
      id: 3,
      name: 'Mobile',
      price: 2000,
      imageUrl: 'https://picsum.photos/200/200',
      description: 'test',
    },
    {
      id: 4,
      name: 'Car',
      price: 200000,
      imageUrl: 'https://picsum.photos/200/100',
      description: 'test',
    },
    {
      id: 5,
      name: 'iPhone',
      price: 20000,
      discount: 30,
      imageUrl: 'https://picsum.photos/200/50',
      description: 'test',
    },
    {
      id: 6,
      name: 'iPhone5',
      price: 20000,
      discount: 30,
      imageUrl: 'https://picsum.photos/200/50',
      description: 'test',
    },
    {
      id: 7,
      name: 'iPhone1',
      price: 20000,
      discount: 30,
      imageUrl: 'https://picsum.photos/200/50',
      description: 'test',
    },
    {
      id: 8,
      name: 'iPhone2',
      price: 20000,
      discount: 30,
      imageUrl: 'https://picsum.photos/200/50',
      description: 'test',
    },
    {
      id: 9,
      name: 'iPhone4',
      price: 20000,
      discount: 30,
      imageUrl: 'https://picsum.photos/200/50',
      description: 'test',
    },
  ];
  cartArray: Product[] = [];

  constructor() {}

  getAllProducts(): Product[] {
    return this.productArray.slice();
  }

  getProductById(id: number): Product | undefined {
    return this.productArray.find((i) => i.id === id);
  }

  addProduct(product: Product): void {
    this.productArray.push(product);
  }

  deleteProduct(id: number): Product[] {
    return this.productArray.filter((item) => item.id != id);
  }

  addItemToCart(product: Product): Product[] {
    console.log(this.cartArray);

    this.cartArray.push(product);
    const res = this.cartArray;
    console.log(res);
    return res;
  }

  updateProduct() {}



  testEmit(product: Product) {
    this.itemAdded.emit(product);
  }
}
