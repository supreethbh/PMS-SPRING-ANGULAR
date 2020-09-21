import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { InsertProductComponent } from './insert-product/insert-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LogoutComponent } from './logout/logout.component';

import { AuthGuardService } from './product-service/auth-guard.service';

const routes: Routes = [
  {path:'', redirectTo:'showAll', pathMatch: 'full', canActivate:[AuthGuardService]},
  {path:'showAll', component: ProductListComponent, canActivate:[AuthGuardService]},
  {path:'insert', component: InsertProductComponent, canActivate:[AuthGuardService]},
  {path:'update', component: UpdateProductComponent, canActivate:[AuthGuardService]},
  {path:'delete', component: DeleteProductComponent, canActivate:[AuthGuardService]},
  {path:'details/:productId', component: ProductDetailsComponent, canActivate:[AuthGuardService]},
  {path:'register', component: RegistrationComponent},
  {path:'login', component: LoginComponent},
  {path:'logout', component: LogoutComponent, canActivate:[AuthGuardService]},
  {path:'home', component: HomeComponent, canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
