import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

// Une factory qui retourne la fonction "validator"
// Permet d'ajouter des options
export function ChoiceValidator(choices: string[]): ValidatorFn {
  return control => {
    if (choices.indexOf(control.value) === -1) {
      return { choice: { value: control.value, choices }
      };
    }
    return null;
  };
}

// Directement une fonction "validator"
export function SimpleValidator(control: AbstractControl): ValidationErrors {
  if (120 < control.value.length) {
    return { simple: { whatever: 'whatever'}};
  }
  return null;
}
