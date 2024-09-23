import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  courseArr: any[] = [];

  registerForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    mobileNo: new FormControl(''),
    email: new FormControl(''),
    course: new FormControl(''),
    message: new FormControl(''),
  });
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private cs:CommonService
  ) {}

  ngOnInit(): void {
    this.getCourseList()
    this.registerForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        mobileNo: [
          '',
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(10),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
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
    this.submitted = true;

    if (this.registerForm.invalid) {
      let formValues = this.registerForm.value
      console.log(formValues,"s");
      
      this.cs.register(formValues).subscribe(
        (response) => {
          console.log('Form submitted successfully', response);
          // Optionally reset the form
          this.registerForm.reset();
          this.submitted = false;
        },
        (error) => {
          console.log('Error occurred:', error);
        }
      );
    }

    

    console.log(JSON.stringify(this.registerForm.value, null, 2));
  }
  getCourseList() {
    
    this.cs.getCoursesList().subscribe((data) => {
      this.courseArr = data;
      console.log(this.courseArr,"as");
      
    });

  
  }

  onReset(): void {
    this.submitted = false;
    this.registerForm.reset();
  }
}