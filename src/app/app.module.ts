import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactNavComponent } from './contact-nav/contact-nav.component';
import { ContactCreateComponent } from './contact-form/contact-create.component';
import { RoutingModule } from './routing/routing.module';
import { ContactEditComponent } from './contact-form/contact-edit.component';
import { API_URL, API_URL_TOKEN, Service1, Service2, Service4, service4Factory } from '../service/services';

@NgModule({
  declarations: [
    AppComponent,
    ContactDetailComponent,
    ContactNavComponent,
    ContactCreateComponent,
    ContactEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule
  ],
  providers: [
    Service1,
    { provide : Service2, useClass: Service2 },
    { provide : Service1, useExisting: Service2 },
    { provide: API_URL_TOKEN, useValue: API_URL},
    { provide: Service4, useFactory: service4Factory, deps: ['options'] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
