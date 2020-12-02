import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

export abstract class AbstractContactForm {
  abstract submitText;

  form = new FormGroup({
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
    return this.form.get('username');
  }

  get email(): AbstractControl {
    return this.form.get('email');
  }

  get memberSince(): AbstractControl {
    return this.form.get('memberSince');
  }

  get agency(): AbstractControl {
    return this.form.get('agency');
  }

  abstract save(): void;
}
