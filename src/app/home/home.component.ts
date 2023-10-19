import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
//import { FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { CrudService } from '../services/crud.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
 
  signupData:any;
  SignupService:any;
  todos:any[]=[];
  newTodoText!: '';
  CrudService: any;
  public employees: any;
  signupForm: any;

  constructor( 
    private crudService: CrudService,
    private http: HttpClient
 
    ) {}
  ngOnInit() {
    this.signupForm=this.crudService.getEmployees().subscribe((data: any[])=>{
      this.signupData=data;
      
    });
 
    
  }
  

}
// export interface Employee{
//   id: number,
//   name: string,
//   designation:string,
//   mobileNo:string,
//   mailId:string,
//   department:string
// }
