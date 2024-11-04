import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-know-dental-surgery',
  templateUrl: './know-dental-surgery.component.html',
  styleUrls: ['./know-dental-surgery.component.css']
})
export class KnowDentalSurgeryComponent implements OnInit{
constructor(private router:Router){}
ngOnInit(): void {
  
}
gotoappointement(){
  this.router.navigate(["/appointment"])
}
gotoservices(){
  this.router.navigate(["/services"])
}
}
