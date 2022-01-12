import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';

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
    path: "products/create", /*Caminho Produtos + create*/
    component: ProductCreateComponent
  },
  {
    path: "products/update/:id", /*Caminho Produtos + update + id necessario do prod*/
    component: ProductUpdateComponent
  },
  {
    path: "products/delete/:id", /*Caminho Produtos + update + id necessario do prod*/
    component: ProductDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }