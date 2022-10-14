import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsHomeComponent } from './components/products-home/products-home.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { AddNewProductComponent } from './components/add-new-product/add-new-product.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../../shared/shared.module'



@NgModule({
  declarations: [
    ProductsHomeComponent,
    ProductsListComponent,
    AddNewProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
