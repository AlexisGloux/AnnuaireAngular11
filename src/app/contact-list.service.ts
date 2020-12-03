import { Injectable } from '@angular/core';
import { Contact, CONTACTS, NEXT_ID } from './fixtures/contacts';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {
  contacts = [];
  nextId = NEXT_ID;

  constructor(private http: HttpClient) {
    // setTimeout(fetch, 500);
    this.fetch();
  }

  fetch(): void {
    this.http.get('assets/contacts.json').subscribe(
      (contacts: Contact[]) => {
        this.contacts = contacts;
        // this.contacts.push(...contacts);
        // console.log(contacts);
      });
  }

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
