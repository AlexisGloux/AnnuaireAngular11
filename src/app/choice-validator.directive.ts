import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {ChoiceValidator} from './choice.validator';

@Directive({
  selector: '[appChoiceValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: ChoiceValidatorDirective, multi: true }
  ]
})
export class ChoiceValidatorDirective implements Validator {
  @Input('appChoiceValidator') choices: string[];

  validate(control: AbstractControl): ValidationErrors | null {
    return this.choices ?
      ChoiceValidator(this.choices)(control)
      : null;
  }
}
