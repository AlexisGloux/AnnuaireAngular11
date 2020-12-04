import { Injectable } from '@angular/core';
import {Contact, NEXT_ID} from './fixtures/contacts';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {
  private subject = new BehaviorSubject<Contact[]>([]);
  contacts = [];
  nextId = NEXT_ID;

  constructor(private http: HttpClient) {
    this.fetch();
  }

  fetch(): void {
    this.http.get('assets/contacts.json').subscribe(
      (contacts: Contact[]) => {
        this.contacts = contacts;
        this.subject.next(this.contacts);
      }
    );
  }

  get data(): Observable<Contact[]> {
    return this.subject.asObservable();
  }

  find(id: number): Observable<Contact|null> {
    return this.subject.pipe(
      map(contacts => contacts.find(c => c.id === +id))
    );
  }

  insert(contact: Contact): void {
    // does not work without a API server
    this.http.post('api/contact', contact).pipe(
      catchError(error => {
        console.error('Http error: ' + error.status);
        return throwError('Http server error');
      })
    ).subscribe(() => {
      contact.id = this.nextId++;
      this.contacts.push(contact);
      this.subject.next(this.contacts);
    });
  }

  update(id: number, contact: Contact): void {
    // does not work without a API server
    this.http.put('api/contact/' + id, contact).pipe(
      catchError(error => {
        console.error('Http error: ' + error.status);
        return throwError('Http server error');
      })
    ).subscribe(() => {
      this.contacts[id] = contact;
      this.subject.next(this.contacts);
    });
  }
}
