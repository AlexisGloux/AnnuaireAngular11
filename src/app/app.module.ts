// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing/routing.module';

// Composant perso
import { AppComponent } from './app.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactNavComponent } from './contact-nav/contact-nav.component';
import { ContactCreateComponent } from './contact-form/contact-create.component';
import { ContactEditComponent } from './contact-form/contact-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SimpleValidatorDirective } from './simple-validator.directive';
import { ChoiceValidatorDirective } from './choice-validator.directive';
import { AgencyPipe } from './agency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContactDetailComponent,
    ContactNavComponent,
    ContactCreateComponent,
    ContactEditComponent,
    NotFoundComponent,
    SimpleValidatorDirective,
    ChoiceValidatorDirective,
    AgencyPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
