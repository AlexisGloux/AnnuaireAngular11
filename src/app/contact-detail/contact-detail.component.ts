import {Component, OnInit} from '@angular/core';
import {Contact, CONTACTS} from '../fixtures/contacts';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit{
  contact: Contact = CONTACTS[0];

  constructor(private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(map => {
      this.contact = CONTACTS[+map.get('id') - 1];
    });
  }
}
