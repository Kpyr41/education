// src/app/models/entity.model.ts
export interface Course {
    id: number;
    name: string;
    description: string;
    courseDuration:string;
    title:string,
    isFeatured:string
    // Add more fields as needed
  }
  export interface Review {
    id: number;
    name: string;
    review: string;
    rate:string;
    days:string,
    date:string,
    isFeatured:string
    // Add more fields as needed
  }
  
  export interface Contact {
    id: number;
    name: string;
    message: string;
    course:string;
    mobileNo:string,
    email:string,
    isFeatured:string
    // Add more fields as needed
  }