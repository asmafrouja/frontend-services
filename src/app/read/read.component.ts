import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
gotoappointement(){
  this.router.navigate(["/appointment"])
}
gotoservices(){
  this.router.navigate(["/services"])
}
}
