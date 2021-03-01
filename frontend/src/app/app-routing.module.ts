import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditProductComponent } from './edit-product/edit-product.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  { path: 'product', component: ProductComponent },
  {path: 'home', component: HomeComponent},
  {path: '', component: LoginComponent},
  {
    path: 'product/:id',
    component: EditProductComponent,
    data: { title: 'Detalhe do Produto' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
