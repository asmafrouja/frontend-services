import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  signupForm: FormGroup;
  isError: boolean = false;
  passwordError: boolean = false;
  serverError: boolean = false;

  constructor(private authService:AuthService, private router: Router, private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      user: this.formBuilder.group({
        username: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        id_roleVAR: [1, [Validators.required]],
        role: this.formBuilder.group({
          id: [2], // Assuming role ID
          name: ['CLIENT'] // Assuming role name
        })
      }),
      id_role: [2, Validators.required] // Assuming this is the role ID
    });

  }

  onSignUp(){
    this.serverError = false;
    console.log(this.signupForm.value)
    // Check if the form is valid
    if (!this.signupForm.valid) {
      return;
    }

    this.authService.signUp(this.signupForm.value).subscribe(
      (res: any) => {
        console.log("response :" ,res)
        if (res) {
          this.router.navigate(['/login']);
        }
      },
      (err) => {
        this.serverError = true;
        console.error('Sign up error:', err);
      }
    );
  }


  validForm(){

    this.isError = false;
    this.passwordError = false;
    if(!this.signupForm.value.email || !this.signupForm.value.username || !this.signupForm.value.phone || !this.signupForm.value.password || !this.signupForm.value.password_confirmation){
      this.isError = true;
      return false
    }
    if(this.signupForm.value.password != this.signupForm.value.password_confirmation){
      this.passwordError = true;
      return false
    }
    return true
  }

}
