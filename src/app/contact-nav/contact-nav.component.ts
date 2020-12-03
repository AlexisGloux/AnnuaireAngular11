import { Component } from '@angular/core';
import { Contact, CONTACTS } from '../fixtures/contacts';
import { ContactListService } from '../contact-list.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-contact-nav',
  templateUrl: './contact-nav.component.html',
  styleUrls: ['./contact-nav.component.scss']
})
export class ContactNavComponent {
  contacts: Observable<Contact[]>;
  selected = CONTACTS[0];

  constructor(private listService: ContactListService) {
    this.contacts = listService.data;
  }

  select(contact: Contact): void {
    this.selected = contact;
  }
}
