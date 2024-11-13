import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/common.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  courseArr: any[] = [];

  registerForm: FormGroup= new FormGroup({
    name: new FormControl('',Validators.required),
    mobileNo: new FormControl('',[Validators.required, Validators.pattern(/^[0-9]{10}$/)]),
    email: new FormControl('', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]),
    course: new FormControl('',Validators.required),
    message: new FormControl('',Validators.required),
  });
  submitted = false;
  loading = false;


  constructor(private formBuilder: FormBuilder,
    private cs:CommonService,
    private toastr: ToastrService
  ) {
     this.registerForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]],
        mobileNo: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
        course: [
          '',
          [
            Validators.required,
           
          ],
        ],
        message: ['', Validators.required],
        // acceptTerms: [false, Validators.requiredTrue],
      },
     
    );
  }
  year: number = new Date().getFullYear();
  ngOnInit(): void {
    this.getCourseList()
    this.registerForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]],
        mobileNo: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
        course: [
          '',
          [
            Validators.required,
           
          ],
        ],
        message: ['', Validators.required],
        // acceptTerms: [false, Validators.requiredTrue],
      },
     
    );
   
  }

  get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  onSubmit(): void {
    this.submitted = true; // Set to true to trigger validation feedback in the template
  
    if (this.registerForm.invalid) {
      return; // If the form is invalid, stop further execution
    }
  
    // Proceed if the form is valid
    this.loading = true; // Show the loading spinner
    let formValues = this.registerForm.value;
  
    this.cs.register(formValues).subscribe(
      (response) => {
        this.loading = false; // Hide the loading spinner
        this.toastr.success("Thank you for contacting us! We'll get back to you soon.");
        this.registerForm.reset(); // Reset the form
        this.submitted = false; // Reset the submitted state
      },
      (error) => {
        this.loading = false; // Hide the loading spinner
        console.log('Error occurred:', error);
        this.toastr.error("Something went wrong. Please try again later.");
      }
    );
  }
  getCourseList(): void {
    this.cs.getCoursesList().subscribe({
      next: (response: any) => {
        
        this.courseArr = response.courses
        console.log(response.courses,"corse 1");
        
       
      },
    });
  
  }

  onReset(): void {
    this.submitted = false;
    this.registerForm.reset();
  }
}