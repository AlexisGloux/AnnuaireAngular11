import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

// Une "factory" qui retourne la fonction "validator
// Permet d'ajouter des options
export function ChoiceValidator(choices: string[]): ValidatorFn {
  return control => {
    if (choices.indexOf(control.value) === -1) {
      // retour un objet avec une unique propriété
      // la propriété identifie le type d'erreur
      // la valeur est complètement arbitraire
      return { choice: { value: control.value, choices } };
    }

    return null;
  };
}

// Directement une fonction "validator"
export function SimpleValidator(control: AbstractControl): ValidationErrors | null {
  if (120 < control.value.length) {
    return { simple: { whatever: 'whatever' }};
  }

  return null;
}
