import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-know-marketing-designer',
  templateUrl: './know-marketing-designer.component.html',
  styleUrls: ['./know-marketing-designer.component.css']
})
export class KnowMarketingDesignerComponent implements OnInit{
constructor(private router:Router){}
ngOnInit(): void {
  
}
gotorendezvous(){
  this.router.navigate(["/appointment"])
}
gotoservices(){
  this.router.navigate(["/services"])
}
}
