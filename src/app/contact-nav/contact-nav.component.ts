import {Component, EventEmitter, Output} from '@angular/core';
import {Contact, CONTACTS} from '../fixtures/contacts';

@Component({
  selector: 'app-contact-nav',
  templateUrl: './contact-nav.component.html',
  styleUrls: ['./contact-nav.component.scss']
})
export class ContactNavComponent {
  contacts = CONTACTS;
  selected = CONTACTS[0];
  @Output()
  contactSelected = new EventEmitter<Contact>();

  select(contact: Contact): void {
    this.selected = contact;
    this.contactSelected.emit(contact);
  }
}
