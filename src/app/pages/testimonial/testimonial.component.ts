import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent {
  testimonialslider: OwlOptions = {
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
    navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],

    nav: true
  }
}
