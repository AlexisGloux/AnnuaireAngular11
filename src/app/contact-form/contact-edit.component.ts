import { Component, OnInit } from '@angular/core';
import { CONTACTS } from '../fixtures/contacts';
import { ActivatedRoute, Router } from '@angular/router';
import {AbstractContactForm} from './abstract-contact-form';
import {ContactListService} from '../contact-list.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.scss']
})
export class ContactEditComponent extends AbstractContactForm implements OnInit {
  currentId: number;
  submitText = 'Éditer';

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private contactList: ContactListService) {
    super();
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(map => {
      this.currentId = +map.get('id');
      const contact = this.contactList.find(this.currentId);
      this.form.get('username').setValue(contact.username);
      this.form.get('email').setValue(contact.email);
      this.form.get('memberSince').setValue(contact.memberSince);
      this.form.get('agency').setValue(contact.agency);
    });
  }

  save(): void {
    const contact = this.contactList.find(this.currentId);
    contact.username = this.form.get('username').value;
    contact.email = this.form.get('email').value;
    contact.memberSince = this.form.get('memberSince').value;
    contact.agency = this.form.get('agency').value;
    this.router.navigate(['/']);
  }
}
