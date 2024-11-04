import { Component, OnInit } from '@angular/core';
import { DataService } from '../views/services.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-expert',
  templateUrl: './add-expert.component.html',
  styleUrls: ['./add-expert.component.css']
})
export class AddExpertComponent implements OnInit{
  expert: any = {}; // Define expert object

  constructor(private ds:DataService,private route:Router) {}
ngOnInit(): void {
  
}
  add() {
    //console.log(data)
  this.ds.addExpert(this.expert).subscribe(data=>{
    console.log(data);
this.gotolistExperts();
  })}
  gotolistExperts(){
    this.route.navigate(['/allexperts']);
  }
  Onsubmit(){
    console.log(this.expert);
    this.add();
  }
  }
