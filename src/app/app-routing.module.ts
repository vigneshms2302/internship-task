import { LoginComponent } from './login/login.component';
// import { AppRoutingModule } from './app-routing.module';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  Route } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  // ...
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}