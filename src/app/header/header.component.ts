import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from '../views/services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  expertsCount: number = 0;
  servicesCount: number = 0;
  clientsCount: number = 0;

  headerslider: OwlOptions = {
    loop: true,
    mouseDrag: true ,
    touchDrag: true,
    pullDrag: true,
    dots:true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
    
    },
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    nav: true
  }
constructor(private dataService: DataService){}
ngOnInit(): void {
  this.loadCounts();
}
loadCounts() {
  this.dataService.getNumbers().subscribe(data => {
    console.log("getnumbers:",data)
    this.clientsCount = data;
  }, error => {
    console.error('Error fetching counts:', error);
  });
  this.dataService.getExpertNumbers().subscribe(data => {
    console.log("getnumbers:",data)
    this.expertsCount = data;
    this.servicesCount=data
  }, error => {
    console.error('Error fetching counts:', error);
  });
  
}
}
