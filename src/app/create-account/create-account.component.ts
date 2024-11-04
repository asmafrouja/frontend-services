import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateModel } from '../models/create';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  public Create: CreateModel;
  userForm: FormGroup;
  errors: string[] = [];
  confirmPass : any;
  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.Create = new CreateModel();
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password_confirmation: ['', Validators.required],
      phone: ['', Validators.required],
      gender: ['female', Validators.required]
    });

  }
  
  create(form: FormGroup): void {
    console.log(this.Create);
    // Traitement de la soumission du formulaire ici
  }
gotologinUser(){
  this.router.navigate(["/loginuser"])
}
}
