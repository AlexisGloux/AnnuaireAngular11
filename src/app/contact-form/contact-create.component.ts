import { Component } from '@angular/core';
import {CONTACTS} from '../fixtures/contacts';
import {AbstractContactForm} from './abstract-contact-form';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact-create-reactive',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.scss']
})
export class ContactCreateComponent extends AbstractContactForm {
  submitText = 'Ajouter';

  constructor(private router: Router) {
    super();
  }

  save(): void {
    CONTACTS.push(this.form.value);
    this.form.reset();
    this.router.navigate(['/']);
  }
}
