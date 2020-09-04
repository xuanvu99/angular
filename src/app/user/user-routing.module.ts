import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {
    path: 'user', children: [
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
