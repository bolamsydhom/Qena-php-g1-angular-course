import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnChanges {

  cartIsOpen = false;
  theAddedProduct: Product[] =[];
  cart!: {
    productsArry: Product[],
    quan: number
  }
 
  constructor(private productService: ProductService) { 
    console.log('constructor');
    
  }

  ngOnChanges(){ 
    console.log('onChanges');
  }

  ngOnInit(): void {
    // this.theAddedProduct = this.productService.cartArray;
    this.productService.itemAdded.subscribe(
      (next)=>{
        this.cart.productsArry.push(next);
        this.cart.quan++;
        console.log(next);
      },
      (error)=>{},
      ()=>{}
    )
    
    console.log('onInit');
    
  }

}
