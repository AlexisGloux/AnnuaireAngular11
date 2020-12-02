import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {CONTACTS} from '../fixtures/contacts';

@Component({
  selector: 'app-contact-create-reactive',
  templateUrl: './contact-create-reactive.component.html',
  styleUrls: ['./contact-create-reactive.component.scss']
})
export class ContactCreateReactiveComponent {
  createForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    memberSince: new FormControl('', [
      Validators.required
    ]),
    agency: new FormControl('', [
      Validators.required
    ])
  });

  add(): void {
    CONTACTS.push(this.createForm.value);
    this.createForm.reset();
  }

  get username(): AbstractControl {
    return this.createForm.get('username');
  }

  get email(): AbstractControl {
    return this.createForm.get('email');
  }

  get memberSince(): AbstractControl {
    return this.createForm.get('memberSince');
  }

  get agency(): AbstractControl {
    return this.createForm.get('agency');
  }
}
