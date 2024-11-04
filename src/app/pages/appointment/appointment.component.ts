import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { DataService } from 'src/app/views/services.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  appointmentForm: FormGroup;
  message: string = '';  // Message de succès ou d'erreur
  success: boolean = false;

  constructor(
    private router: Router,
    private datepipe: DatePipe,
    private formBuilder: FormBuilder,
    private ds: DataService
  ) { }

  ngOnInit(): void {
    this.appointmentForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      expert: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      problemDescription: ['']
    });

    // Set default date
    this.appointmentForm.get('date')?.setValue(this.datepipe.transform(new Date(), 'yyyy-MM-dd'));
  }

  onSubmit() {
    if (this.appointmentForm.valid) {
      const appointmentData = {
        ...this.appointmentForm.value,
        date: this.datepipe.transform(this.appointmentForm.value.date, 'yyyy-MM-dd')
      };

      console.log("appointment : ", appointmentData)

      this.ds.appointment(appointmentData).subscribe(
        data => {
          console.log('Appointment booked successfully', data);
          this.message = 'Appointment booked successfully!';
          this.success = true;
          this.appointmentForm.reset();  // Réinitialise le formulaire
          this.router.navigate(['/invoice']);  // Redirige vers la page de facture
        },
        error => {
          console.error('Error booking appointment', error);
          this.message = 'Failed to book appointment. Please try again.';
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
