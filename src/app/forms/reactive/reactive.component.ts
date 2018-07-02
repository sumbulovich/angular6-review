import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {
  signupForm: FormGroup;
  genders = ['male', 'female'];
  submitted = false;
  forbiddenUsernames = ['Patch Value', 'Chris', 'Anna'];
  hobbies: FormArray;

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup( {
        'username': new FormControl( null, [Validators.required, this.forbiddenNames.bind(this)] ),
        'email': new FormControl( null, [ Validators.required, Validators.email ], this.forbiddenEmails ),
        'gender': new FormControl( 'male', Validators.required )
      }),
      'hobbies': new FormArray([])
    });

    this.signupForm.patchValue({
      'userData': {
        'username': 'Patch Value',
        'email': 'test@test.com'
      },
    });

    this.signupForm.valueChanges.subscribe(
      (value) => console.log(value)
    );
    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
    this.hobbies = <FormArray>this.signupForm.get('hobbies');
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    this.hobbies.push(control);
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null; // never return return {'nameIsForbbiden': false}
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.signupForm.value);
    this.signupForm.reset();
    while (this.hobbies.length !== 0) {
      this.hobbies.removeAt(0);
    }
  }

}
