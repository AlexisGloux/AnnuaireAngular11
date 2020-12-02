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
  constructor(private router: Router) {
    super();
  }

  add(): void {
    CONTACTS.push(this.createForm.value);
    this.createForm.reset();
    this.router.navigate(['/']);
  }
}
