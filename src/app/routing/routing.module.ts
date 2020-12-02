import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactNavComponent } from '../contact-nav/contact-nav.component';
import { ContactCreateComponent } from '../contact-form/contact-create.component';
import { ContactDetailComponent } from '../contact-detail/contact-detail.component';
import { ContactEditComponent } from '../contact-form/contact-edit.component';

const routes: Routes = [
  { path: '', component: ContactNavComponent },
  { path: 'new', component: ContactCreateComponent },
  { path: 'show/:id', component: ContactDetailComponent },
  { path: 'edit/:id', component: ContactEditComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
