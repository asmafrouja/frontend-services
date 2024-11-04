import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-know-interior-designer',
  templateUrl: './know-interior-designer.component.html',
  styleUrls: ['./know-interior-designer.component.css']
})
export class KnowInteriorDesignerComponent implements OnInit {
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
