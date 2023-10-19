import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService:AuthService
    
    ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      
    });
  }
  onSubmit(): void {
    // if (this.signupForm.valid) {
    //   // Submit the form data
    //   const credentials=this.signupForm.value;
    //   this.authService.Login(credentials).subscribe(
    //     ( response: any) =>{
    //       console.log('Login response:', response)
    //     },
    //     (error: any) =>{
    //       console.log('Login error:', error) }
    //   );

      
      console.log(this.signupForm.value);
    }
  }


