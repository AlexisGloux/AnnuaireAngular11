import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactNavComponent } from '../contact-nav/contact-nav.component';
import { ContactNavComponent as AdminContactNavComponent } from '../admin/contact-nav/contact-nav.component';
import { ContactCreateComponent } from '../contact-form/contact-create.component';
import { ContactDetailComponent } from '../contact-detail/contact-detail.component';
import { ContactEditComponent } from '../contact-form/contact-edit.component';
import { LoginGuard } from '../login/login.guard';
import { AdminComponent } from '../admin/admin.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ContactNavComponent },
  { path: 'detail/:id', component: ContactDetailComponent },
  { path: 'admin',
    component: AdminComponent,
    canActivate: [LoginGuard],
    children: [
      { path: '', component: AdminContactNavComponent },
      { path: 'nouveau', component: ContactCreateComponent },
      { path: 'edition/:id', component: ContactEditComponent },
    ]
  },
  // Redirection default si url n'existe pas (ex: page 404 custom)
  { path: '**', component: NotFoundComponent },
  { path: '**', component: ContactNavComponent }
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
