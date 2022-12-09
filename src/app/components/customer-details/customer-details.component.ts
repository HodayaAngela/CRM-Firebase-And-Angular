import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Customer } from 'src/app/interfaces/Customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
})
export class CustomerDetailsComponent implements OnInit {
  // @Input() id!: string;
  id!: string;
  customer: Customer = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  };

  //ActivatedRoute- Access to information about a route associated with a component that is loaded in an outlet.
  constructor(
    private cs: CustomersService,
    private ar: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Automatic display of customer information
    const id = this.ar.snapshot.params['id'];
    this.cs.getCustomerById(id as string).subscribe({
      next: (customer: Customer) => (this.customer = customer),
    });
  }

  backToCustomers(): void {
    this.router.navigateByUrl('dashbord/customers');
  }
}
