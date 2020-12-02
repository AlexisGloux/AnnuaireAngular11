import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactNavComponent } from './contact-nav/contact-nav.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ContactCreateReactiveComponent } from './contact-create-reactive/contact-create-reactive.component';
import { RoutingModule } from './routing/routing.module';
import { ContactEditComponent } from './contact-edit/contact-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactDetailComponent,
    ContactNavComponent,
    ContactCreateComponent,
    ContactCreateReactiveComponent,
    ContactEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
