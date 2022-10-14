import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { AddNewProductComponent } from './components/add-new-product/add-new-product.component';
import { ProductsHomeComponent } from './components/products-home/products-home.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsHomeComponent,
    children: [
      { path: 'list', component: ProductsListComponent },
      { path: 'add-product', component: AddNewProductComponent },
    ],
  },
  // { path: '', pathMatch: 'full', redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
