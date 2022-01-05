import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';

import {HomeComponent} from './views/home/home.component';
import {ProductCrudComponent} from './views/product-crud/product-crud.component';



const routes: Routes = [
  {
  path: "",  /*Caminho home */
  component: HomeComponent
  },
  {
    path: "products", /*Caminho Produtos*/
    component: ProductCrudComponent
  },
  {
    path: "products/create", /*Caminho Produtos*/
    component: ProductCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }