import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
})
export class CourseDetailComponent {
  routerSub!: Subscription;
  courseArr: any = {};
  courseId: any;
  courseName: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cs: CommonService
  ) {}
  // breadCumbs: any[] = [];

  ngOnInit() {
    this.routerSub = this.route.params.subscribe((param: any) => {
      console.log(param.data, 'awd');

      this.courseId = param.id;
      this.courseName = param.data;
      this.getCourseDetails(this.courseId);
    });
  }
  getCourseDetails(id: any) {
    this.cs.getCourseById(id).subscribe((data) => {
      console.log(data);
      this.courseArr = data;
    });
  }
  scroll() {
    document
      .querySelector('.contact')
      ?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}
