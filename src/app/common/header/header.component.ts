import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  scroll() {
    document
      .querySelector('.contact')
      ?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
   
  }
  scrollAbout() {
    document
      .querySelector('.about')
      ?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
   
  }
  scrollCourse(){
    document
    .querySelector('.course')
    ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  scrollTestimonial(){
    document
    .querySelector('.testimonial')
    ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
