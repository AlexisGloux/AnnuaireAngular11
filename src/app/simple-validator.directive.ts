import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { SimpleValidator } from './custom.validator';

@Directive({
  selector: '[appSimpleValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: SimpleValidatorDirective, multi: true }
  ]
})
export class SimpleValidatorDirective implements Validator {

  validate(control: AbstractControl): {[key: string]: any} | null {
    return SimpleValidator(control);
  }
}
