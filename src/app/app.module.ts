import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavbarComponent } from './layout/top-navbar/top-navbar.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ProductItemComponent } from './features/products/product-item/product-item.component';
import { ProductListComponent } from './features/products/product-list/product-list.component';
import { ProductListContainerComponent } from './features/products/product-list-container/product-list-container.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { TestDirectiveDirective } from './shared/test-directive.directive';
import { DropDownComponent } from './shared/drop-down/drop-down.component';
import { ProductService } from './_services/product.service';
import { ProductDetailsComponent } from './features/products/product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { ProductAddComponent } from './features/products/product-add/product-add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    NavbarComponent,
    ProductItemComponent,
    ProductListComponent,
    ProductListContainerComponent,
    TestComponentComponent,
    TestDirectiveDirective,
    DropDownComponent,
    ProductDetailsComponent,
    ProductAddComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
