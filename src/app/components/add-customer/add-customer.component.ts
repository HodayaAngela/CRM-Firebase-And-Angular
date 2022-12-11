import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/interfaces/Customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent implements OnInit {
  customer: Customer = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };

  // Injecting service:
  // 1. CustomersService: from the services folder
  // 2. NgbActiveModal:A reference to the currently opened modal.
  constructor(
    private cs: CustomersService,
    private activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {}

  addNewCustomer() {
    if (!this.customer) return alert('Wrong format');
    // addCustomer() will get the customer value from the class using two way data binding[()]
    this.cs
      .addCustomer(this.customer)
      .then(() => {
        console.log('Customer was added');
        // After the addition, close the modal
        this.activeModal.close();
        this.reset();
      })
      .catch((err) => console.log(err));
  }
  // Reset fields in case of success
  reset() {
    this.customer = { firstName: '', lastName: '', phone: '', email: '' };
  }
}
