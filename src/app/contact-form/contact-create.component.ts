import { Component } from '@angular/core';
import {AbstractContactForm} from './abstract-contact-form';
import {ContactListService} from '../contact-list.service';

@Component({
  selector: 'app-contact-create-reactive',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactCreateComponent extends AbstractContactForm {
  submitText = 'Ajouter';

  constructor(private contactList: ContactListService) {
    super();
  }

  save(): void {
    this.contactList.insert(this.form.value);
    this.form.reset();
  }
}
