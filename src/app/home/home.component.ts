import { Component, AfterViewInit } from '@angular/core';
import { CommonService } from '../common.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ScrollService } from '../scroll.service';

declare var $: any; // Declare $ for TypeScript

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  courseArr: any[] = [];
  reviewList:any[]=[];
  // courseUrl: string = '/courses';
  // offset = 0;
  // showRecords = 10;
  // loadMorebtn:boolean=true
  constructor(private cs: CommonService,private scrollService: ScrollService, private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.scrollService.scrollToSection$.subscribe((sectionId: string) => {
      this.scrollToSection(sectionId);
    });
    this.getCourseList();
    this.getReviewList()
  }
  getCourseList() {
    this.cs.getFeaturedCourses().subscribe((data) => {
      this.courseArr = data;
      setTimeout(() => this.initializeCarousel(), 0);
      console.log(this.courseArr);
    });
  }
  getReviewList() {
    this.cs.getReview().subscribe((data) => {
      this.reviewList = data;
      setTimeout(() => this.initializeCarousel(), 0);
      console.log(this.reviewList,"review");
    });
  }
  
  reviewConfig = {
    dots: true,
    infinite: false,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          arrows: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
        },
      },
    ],
  };
  courseConfig = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          arrows: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
        },
      },
    ],
  };

  ngAfterViewInit() {
    // this.scrollToSectionFromQuery();
    // Initialize Owl Carousel after view initialization
    $('.header-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      items: 1,
      autoplay: true, // Enable auto-play
      autoplayTimeout: 3000, // Set the time between slides (in milliseconds)
      autoplayHoverPause: true, // Pause on hover
    });
    this.initializeCarousel();
    $('.testimonial-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      items: 3,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 3,
        },
      },
    });
  }
 

  initializeCarousel(): void {
    $('.blog-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      items: 3,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 2
        }
      }
    });
  }
  scroll() {
    document
      .querySelector('.contact')
      ?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
   
  }
  scrolltotop(){
    document
    .querySelector('.slider')
    ?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
 

  // private scrollToSectionFromQuery() {
  //   const sectionId = this.route.snapshot.queryParams['section'];
  //   if (sectionId) {
  //     const element = document.getElementById(sectionId);
  //     if (element) {
  //       element.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   }
  // }
  private scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
