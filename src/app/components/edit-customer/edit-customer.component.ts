import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/interfaces/Customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css'],
})
export class EditCustomerComponent implements OnInit {
  // Getting the ID
  @Input() id!: string;
  //form variables
  customer: Customer = { firstName: '', lastName: '', phone: '', email: '' };

  // Injecting service:
  // 1. CustomersService: from the services folder
  // 2. NgbActiveModal:A reference to the currently opened modal.
  constructor(
    private cs: CustomersService,
    private activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    // Automatic display of customer information
    this.cs.getCustomerById(this.id).subscribe({
      // The value in the callback transferred to the variable
      next: (customerData: Customer) => (this.customer = customerData),
    });
  }
  updateTheCustomer() {
    // After the update, close the modal
    this.cs
      .updateCustomer(this.customer)
      .then(() => this.activeModal.close())
      .catch((err) => console.log(err));
  }
}
