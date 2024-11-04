import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../views/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allexperts',
  templateUrl: './allexperts.component.html',
  styleUrls: ['./allexperts.component.css'] // Utilisation de styleUrls au lieu de styleUrl
})
export class AllexpertsComponent implements OnInit {
  public experts = [];
  dataExpert = {
    name: '',
    position: '',
    email: '',
    office: '',
    age: '0',
    start_date: '0',
    FEE: '0',
    phone: '',
    Textarea1: '',
    id: ''
  };

  constructor(private router: Router, private ds: DataService) {}

  ngOnInit(): void {
    this.getExpert();
  }

  getdata(expert: any) {
    this.dataExpert = { ...expert };
    console.log(this.dataExpert);
    this.ds.updateExpert(this.dataExpert.id,this.dataExpert).subscribe(data => {
      //this.experts = data;
      console.log(data);
    });
  }

  getExpert() {
    this.ds.getAllExperts().subscribe(data => {
      this.experts = data;
      console.log(data);
    });
  }

  delete(id: any, index: number) {
    this.ds.deleteExpert(id).subscribe(() => {
      this.experts.splice(index, 1);
      console.log('Expert deleted successfully');
    });
  }

  details(id: any) {
    this.router.navigate([`/detailsexperts/${id}`]);
  }

  update() {
    const id = this.dataExpert.id;
    console.log(this.dataExpert)
    const updatedProfile = { ...this.dataExpert };
    console.log(updatedProfile)
    this.ds.updateExpert(id, updatedProfile).subscribe(result => {
      console.log(result);
      const index = this.experts.findIndex(expert => expert._id === id);
      if (index !== -1) {
        this.experts[index] = { ...updatedProfile, _id: id };
      }
    });
  }
}
