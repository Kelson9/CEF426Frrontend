import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChefComponent } from './chef/chef.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManagerDetailsComponent } from './manager-details/manager-details.component';
import { ManagerComponent } from './manager/manager.component';
import { SignupComponent } from './signup/signup.component';
import { SupplierComponent } from './supplier/supplier.component';
import { WaiterComponent } from './waiter/waiter.component';

const routes: Routes = [
{path:'home', component: HomeComponent},
{path:'login', component:LoginComponent},
{path:'signup', component:SignupComponent},
{path:'manager', component:ManagerComponent},
{path:'waiter', component:WaiterComponent},
{path:'customer', component:CustomerComponent},
{path:'supplier', component:SupplierComponent},
{path:'chef', component:ChefComponent},
{path:'dish/:id', component:ManagerDetailsComponent},

{path:'', redirectTo:'/home',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
