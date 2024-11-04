import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-know-accountant',
  templateUrl: './know-accountant.component.html',
  styleUrls: ['./know-accountant.component.css']
})
export class KnowAccountantComponent implements OnInit {

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

