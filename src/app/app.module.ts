import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    DropDownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
