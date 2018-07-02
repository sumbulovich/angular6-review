import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driving',
  templateUrl: './template-driving.component.html',
  styleUrls: ['./template-driving.component.scss']
})
export class TemplateDrivingComponent {
  @ViewChild('formRef') signupForm: NgForm;
  submitted = false;
  defaultValue = 'Data binding';
  twoWayDataBinding = 'Two way data binding';
  genders = ['male', 'female'];

  constructor() { }

  onSubmit() {
    this.submitted = true;
    console.log(this.signupForm.value);
    this.signupForm.reset();
  }

}
