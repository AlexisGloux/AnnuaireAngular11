import {Component, OnInit} from '@angular/core';
import {Contact, CONTACTS} from '../fixtures/contacts';
import {ActivatedRoute} from '@angular/router';
import {ContactListService} from '../contact-list.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit{
  contact: Observable<Contact>;

  constructor(private activeRoute: ActivatedRoute, private contactList: ContactListService) {
  }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(map => {
      this.contact = this.contactList.find(+map.get('id'));
    });
  }
}
