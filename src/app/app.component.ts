import { Component } from '@angular/core';
import { Product } from './_models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-course-project';
  addedProducts: Product[] = [];

  onItemAdd(product: Product){
    this.addedProducts.push(product);
  }
}




// class hamada {
//  private x;
//  private y;

//   constructor(){
//   }

//   getX(){
//     return this.x;
//   }

//   setX(x){
//     this.x = x;
//   }

//   calculate(){
//     this.setX(x)
//   }
// }

// var t = new hamada();
// t.setX(4);