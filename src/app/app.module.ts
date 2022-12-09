import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FilterPipe } from './pipes/filter.pipe';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { ShowCustomersComponent } from './components/show-customers/show-customers.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { RegisterComponent } from './components/register/register.component';
import { FilterContactsPipe } from './pipes/filter-contacts.pipe';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    DashbordComponent,
    ContactsComponent,
    FilterPipe,
    AddCustomerComponent,
    ShowCustomersComponent,
    EditCustomerComponent,
    RegisterComponent,
    FilterContactsPipe,
    CustomerDetailsComponent,
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //ngForm ,For Template Driven Forms (TDF):
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
