// import { Injectable } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from './common.model';
import { Contact } from './common.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  // constructor() { }
  private apiUrl = environment.API_BASE_URL; // Replace with your API URL
   url = `${this.apiUrl}${'course'}`;
  constructor(private http: HttpClient) {}
  // 
 

  getCoursesList(): Observable<Course[]> {
    const url = `${this.apiUrl}${'allCourse'}`;
    
    // console.log(url);
    
    return this.http.get<Course[]>(url);
  }
  getCourses(page:any ,limit:any): Observable<Course[]> {
    const url = `${this.apiUrl}${'allCourse'}?page=${page / limit + 1}&limit=${limit}`;
    
    // console.log(url);
    
    return this.http.get<Course[]>(url);
  }
  getReview(): Observable<Course[]> {
    const url = `${this.apiUrl}${'featuredReview'}`;
    return this.http.get<Course[]>(url);
  }

  getFeaturedCourses(): Observable<Course[]> {
  const  url = `${this.apiUrl}${'featuredCourse'}`;
    
    return this.http.get<Course[]>(url);
  }
  getCourseById(id: number): Observable<Course> {
   
    return this.http.get<Course>(`${this.url}/${id}`);
  }
 

  createCourse(Course: Course): Observable<Course> {
    return this.http.post<Course>(this.url, Course);
  }

  updateCourse(Course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.url}/${Course.id}`, Course);
  }

  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
  register(Contact: Contact): Observable<Contact> {
  const  url = `${this.apiUrl}${'contact'}`;
  console.log(url,"awSzawa");
  

    return this.http.post<Contact>(url, Contact);
  }

}

