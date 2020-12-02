import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

export class AbstractContactForm {
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
