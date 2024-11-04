import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-know-chef',
  templateUrl: './know-chef.component.html',
  styleUrls: ['./know-chef.component.css']
})
export class KnowChefComponent implements OnInit {
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
