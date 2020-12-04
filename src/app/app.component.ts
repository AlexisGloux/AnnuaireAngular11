import { Component } from '@angular/core';
import { Contact, CONTACTS} from './fixtures/contacts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng201130';
  selected = CONTACTS[0];

  select(contact: Contact): void {
    this.selected = contact;
  }
}
