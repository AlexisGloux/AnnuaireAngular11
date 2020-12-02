import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactNavComponent } from '../contact-nav/contact-nav.component';
import { ContactCreateReactiveComponent } from '../contact-create-reactive/contact-create-reactive.component';
import { ContactDetailComponent } from '../contact-detail/contact-detail.component';
import { ContactEditComponent } from '../contact-edit/contact-edit.component';

const routes: Routes = [
  { path: '', component: ContactNavComponent },
  { path: 'new', component: ContactCreateReactiveComponent },
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