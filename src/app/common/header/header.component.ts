import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from 'src/app/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private scrollService: ScrollService, private router: Router) {}

  navigateToSection(sectionId: string) {
    if (this.router.url === '/') {
      // If on home page, request scroll directly
      this.scrollService.requestScrollToSection(sectionId);
    } else {
      // If not on home page, navigate to home first, then request scroll
      this.router.navigate(['/']).then(() => {
        this.scrollService.requestScrollToSection(sectionId);
      });
    }
  }
//   scroll() {
//     document
//       .querySelector('.contact')
//       ?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
   
//   }
//   scrollAbout() {
//     document
//       .querySelector('.about')
//       ?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
   
//   }
//   scrollCourse(){
//     document
//     .querySelector('.course')
//     ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
//   }
//   scrollTestimonial(){
//     document
//     .querySelector('.testimonial')
//     ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
//   }
}
