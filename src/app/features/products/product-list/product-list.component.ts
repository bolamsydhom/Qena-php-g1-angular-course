import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/_models/product.model';
import { AuthService } from 'src/app/_services/auth/auth.service';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productsArray!: Product[] ;
  productArray$!: Observable<{product: Product[], numberOfProducts: number}>;
  @Output()
  itemAddedFromProductListComponent: EventEmitter<Product> = new EventEmitter<Product>();


  constructor(private productService: ProductService, private authService: AuthService) {}

  ngOnInit(): void {
   // this.getAllProducts();
    this.productArray$ = this.productService.getAllProducts();
  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe(
      (res)=>{
        this.productsArray = res.product;
      },
      (err)=>{
        console.log('error happened and catched from the component',err);
      },
      ()=>{}
    );

    const user = {
      email: 'teesthamaada@hamada.com',
      password: '12345678',
    }
    this.authService.login(user).subscribe(
      (res)=>{
        localStorage.setItem('token', res.token)
      }
    )
  }

  onItemAdded(product: Product){
    console.log(product);
    
    this.itemAddedFromProductListComponent.emit(product);
  }

}