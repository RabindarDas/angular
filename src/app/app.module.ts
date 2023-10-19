import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth.service';




@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    SignupComponent,
    HomeComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     ReactiveFormsModule,
     HttpClientModule,
     FormsModule
  ],
  providers: [ AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
