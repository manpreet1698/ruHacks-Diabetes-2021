import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { GuardAuthService } from './guard-auth.service';
import { GuardLoggedInService } from './guard-logged-in.service';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
{path: "landing-page", component : LandingPageComponent, canActivate: [GuardAuthService]},  
{path: "register", component : RegisterComponent, canActivate: [GuardLoggedInService]},
{path: "login", component : LoginComponent, canActivate: [GuardLoggedInService]},
{path: "about", component: AboutComponent, canActivate: [GuardAuthService]},
{path: '', redirectTo: "/landing-page", pathMatch: 'full'},
{path: '**', component: NotFoundComponent, canActivate: [GuardAuthService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
