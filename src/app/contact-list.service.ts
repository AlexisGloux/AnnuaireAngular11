import { Injectable } from '@angular/core';
import { Contact, CONTACTS, NEXT_ID } from './fixtures/contacts';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {
  private subject = new BehaviorSubject<Contact[]>([]);
  contacts = [];
  nextId = NEXT_ID;

  constructor(private http: HttpClient) {
    // setTimeout(fetch, 500);
    this.fetch();
  }

  fetch(): void {
    this.http.get('assets/contacts.json').subscribe(
      (contacts: Contact[]) => {
        this.contacts.push(...contacts);
        this.subject.next(this.contacts);
        // this.contacts = contacts;
        // console.log(contacts);
      });
  }

  get data(): Observable<Contact[]> {
    return this.subject.asObservable();
  }

  find(id: number): Contact {
    return this.contacts.find(c => c.id === +id);
  }

  add(contact: Contact): void {
    contact.id = this.nextId++;
    this.contacts.push(contact);
  }
}
