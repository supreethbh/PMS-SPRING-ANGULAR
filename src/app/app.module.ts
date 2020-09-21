import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InsertProductComponent } from './insert-product/insert-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';

import { ProductService } from './product-service/product-service.service';
import { AuthenticationService } from './product-service/authentication.service';
import { AuthGuardService } from './product-service/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    InsertProductComponent,
    DeleteProductComponent,
    UpdateProductComponent,
    ProductListComponent,
    ProductDetailsComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductService, 
    AuthenticationService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
