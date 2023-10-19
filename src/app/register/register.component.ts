import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { AbstractControl } from '@angular/forms';
import { CrudService } from '../services/crud.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  [x: string]: any;
  // registerForm!: FormGroup;
  // submitted = false;
  signupForm!: FormGroup;
  CrudService: any;
  signupSuccessMessage!:string;
  
  constructor(
    private fb: FormBuilder,
    private crudService:CrudService,
    private router:Router
  
   
 
    
  ) { }

  
clearForm():void{
  this.signupForm.reset();
}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      phone:['', [Validators.required, Validators.minLength(10)]]
      
    },
    { validator: this.passwordMatchValidator }
    );

  }
 passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
  
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { passwordMismatch: true };
    }
  
    return null;
  }

  

  onSubmit(): void {
    if (this.signupForm.valid) {
      const data = this.signupForm.value;
      this.crudService.signup(data).subscribe(
        ( response: any) =>{
          this.signupSuccessMessage='Signup successful! You can Login .';
          setTimeout(() =>{
            this.router.navigate(['/from1']);
          },3000);
         
          console.log('signup response:', response)
        },
        (error: any) =>{
          console.log('signup error:', error) }
        
      );
    }
  }
}
