
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/services.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  expertsCount: number = 0;
  userRegistrationsCount: number = 0;
  uniqueVisitorsCount: number = 0;

  constructor(private ds: DataService) {}

  ngOnInit(): void {
    this.loadCounts();
  }

  loadCounts() {
    this.ds.getNumbers().subscribe(data => {
      
      this.userRegistrationsCount = data;
      this.uniqueVisitorsCount = data;
    }, error => {
      console.error('Error fetching counts:', error);
    });
    this.ds.getExpertNumbers().subscribe(data => {
      this.expertsCount=data;
    }, error => {
      console.error('Error fetching counts:', error);
    });
  }
}
