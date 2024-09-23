import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {
  courseArr: any[] = [];
  // courseUrl: string = '/courses';
  offset = 0;
  showRecords =8;
  loadMorebtn:boolean=true

  constructor(
    private cs:CommonService
  ) {}
  ngOnInit(): void {
    this.getCourseList();
  }
  getCourseList() {
    
    this.cs.getCourses(this.offset,this.showRecords).subscribe({
      next: (response: any) => {
        console.log(response.courses);
        
        this.courseArr = this.courseArr.concat(response.courses);
        console.log(this.courseArr,"as");
        
        let count = response.totalCourses;
        if (count <= this.showRecords + this.offset) {
          this.loadMorebtn = false;
        } else {
        }
      },
    });
  
  }
  loadMore(): void {
    this.offset += this.showRecords;
    this.getCourseList();
  }





}
