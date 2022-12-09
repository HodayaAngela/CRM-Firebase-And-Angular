import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { ShowCustomersComponent } from './components/show-customers/show-customers.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  //Default path to the login page
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: 'dashbord',
    component: DashbordComponent,
    // Nesting routes:
    children: [
      {
        path: 'customers',
        component: ShowCustomersComponent,
      },
      { path: 'contacts', component: ContactsComponent },
    ],
    //canActivate:[AuthGuard] -a guard deciding if a route can be activated.
    canActivate: [AuthGuard],
  },
  { path: 'customer-detaiels/id', component: CustomerDetailsComponent },

  // Routing that does not exist
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
