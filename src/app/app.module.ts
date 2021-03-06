import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ManagerComponent } from './manager/manager.component';
import { CustomerComponent } from './customer/customer.component';
import { ChefComponent } from './chef/chef.component';
import { WaiterComponent } from './waiter/waiter.component';
import { SupplierComponent } from './supplier/supplier.component';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import {HttpClientModule } from '@angular/common/http';
import { ManagerDetailsComponent } from './manager-details/manager-details.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ManagerComponent,
    CustomerComponent,
    ChefComponent,
    WaiterComponent,
    SupplierComponent,
    ManagerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,


  ],
  providers: [ApiService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
