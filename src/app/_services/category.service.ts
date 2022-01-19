import { Injectable } from '@angular/core';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private proS: ProductService) { }
}
