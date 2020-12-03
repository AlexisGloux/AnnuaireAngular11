import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactNavComponent } from '../contact-nav/contact-nav.component';
import { ContactCreateComponent } from '../contact-form/contact-create.component';
import { ContactDetailComponent } from '../contact-detail/contact-detail.component';
import { ContactEditComponent } from '../contact-form/contact-edit.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
  // Redirection (l.10)
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ContactNavComponent },
  { path: 'new', component: ContactCreateComponent },
  { path: 'show/:id', component: ContactDetailComponent },
  { path: 'edit/:id', component: ContactEditComponent },
  // Redirection default si url n'existe pas (ex: page 404 custom)
  { path: '**', component: NotFoundComponent }
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
