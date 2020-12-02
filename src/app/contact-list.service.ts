import { Injectable } from '@angular/core';
import { Contact, CONTACTS } from './fixtures/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {
  contacts = CONTACTS;

  findAll(): Array<Contact> {
    return this.contacts;
  }

  find(id: number): Contact {
    return this.contacts.find(c => c.id === +id);
  }
}
