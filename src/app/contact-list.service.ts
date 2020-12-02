import { Injectable } from '@angular/core';
import { Contact, CONTACTS, NEXT_ID } from './fixtures/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {
  contacts = CONTACTS;
  nextId = NEXT_ID;

  findAll(): Array<Contact> {
    return this.contacts;
  }

  find(id: number): Contact {
    return this.contacts.find(c => c.id === +id);
  }

  add(contact: Contact): void {
    contact.id = this.nextId++;
    this.contacts.push(contact);
  }
}
