import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'courses',
    component:CourseListComponent
  },
  {
    path:'courses/:data/:id',
    component:CourseDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
