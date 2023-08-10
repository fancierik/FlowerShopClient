import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ManagerComponent} from "./manager/manager.component";
import {ClientpageComponent} from "./clientpage/clientpage.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'client',
    pathMatch: 'full'
  },
  {
    path:'manager',
    component:ManagerComponent
  },
  {
    path:"register",
    component: RegisterComponent
  },
  {
    path:"client",
    component: ClientpageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
