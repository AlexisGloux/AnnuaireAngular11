import { Component } from '@angular/core';
import {AbstractContactForm} from './abstract-contact-form';
import {Router} from '@angular/router';
import {ContactListService} from '../contact-list.service';

@Component({
  selector: 'app-contact-create-reactive',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.scss']
})
export class ContactCreateComponent extends AbstractContactForm {
  submitText = 'Ajouter';

  constructor(private router: Router, private contactList: ContactListService) {
    super();
  }

  save(): void {
    this.contactList.add(this.form.value);
    this.form.reset();
    this.router.navigate(['/']);
  }
}
