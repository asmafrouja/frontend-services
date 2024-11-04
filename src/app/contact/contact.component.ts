import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../views/services.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  message: string = '';  // Pour afficher le message de succès ou d'erreur
  success: boolean = false;

  constructor(private formBuilder: FormBuilder, private ds: DataService) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  ContactUser() {
    if (this.contactForm.valid) {
      this.ds.contact(this.contactForm.value).subscribe(
        data => {
          console.log('Message sent successfully', data);
          this.message = 'Message sent successfully!';
          this.success = true;
          this.contactForm.reset();  // Réinitialise le formulaire
        },
        error => {
          console.error('Error sending message', error);
          this.message = 'Failed to send message. Please try again.';
          this.success = false;
        }
      );
    } else {
      console.error('Form is invalid');
      this.message = 'Please fill out the form correctly.';
      this.success = false;
    }
  }
}
