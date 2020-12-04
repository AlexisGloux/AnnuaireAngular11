import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {SimpleValidator} from './choice.validator';

@Directive({
  selector: '[appSimpleValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: SimpleValidatorDirective, multi: true }
  ]
})
export class SimpleValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return SimpleValidator(control);
  }
}
