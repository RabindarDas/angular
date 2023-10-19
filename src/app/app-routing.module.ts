import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './signup/signup.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  { path: ' ', component: AppComponent },
  { path: 'home', component: HomeComponent },
 
  { path: 'from', component: RegisterComponent },
  { path: '', redirectTo:'/from',pathMatch:'full' },

 { path: 'from1', component: SignupComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
