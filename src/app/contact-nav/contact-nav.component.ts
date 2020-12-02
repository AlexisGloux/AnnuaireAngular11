import { Component } from '@angular/core';
import { Contact, CONTACTS } from '../fixtures/contacts';
import { ContactListService } from '../contact-list.service';

@Component({
  selector: 'app-contact-nav',
  templateUrl: './contact-nav.component.html',
  styleUrls: ['./contact-nav.component.scss']
})
export class ContactNavComponent {
  selected = CONTACTS[0];

  constructor(private listService: ContactListService) {
  }

  get contacts(): Array<Contact> {
    return this.listService.findAll();
  }

  select(contact: Contact): void {
    this.selected = contact;
  }
}
