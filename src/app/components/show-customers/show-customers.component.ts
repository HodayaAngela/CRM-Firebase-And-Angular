import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/interfaces/Customer';
import { CustomersService } from 'src/app/services/customers.service';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { EditCustomerComponent } from '../edit-customer/edit-customer.component';

@Component({
  selector: 'app-show-customers',
  templateUrl: './show-customers.component.html',
  styleUrls: ['./show-customers.component.css'],
})
export class ShowCustomersComponent implements OnInit {
  //Table variables
  customers: Customer[] = [];

  //form variables
  customer: Customer = { firstName: '', lastName: '', phone: '', email: '' };

  // Injecting service:
  // 1. CustomersService: from the services folder
  //2. NgbModal: A service for opening modal windows.
  constructor(private cs: CustomersService, private modal: NgbModal) {}

  // get all customers from DB
  // DB:from Firestore=> service=> component
  // The method returns an observable, so the component will listen by subscribe
  ngOnInit(): void {
    this.cs.getCustomer().subscribe({
      next: (customerData: Customer[]) => (this.customers = customerData),
    });
  }

  // Clicking on the addCustomer button will open the AddCustomerComponent
  addCustomer(customer: Customer) {
    // A reference to the modal:
    let modalRef = this.modal.open(AddCustomerComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal',
    });
    //Passing the id through the modal
    modalRef.componentInstance.id = customer.id;
  }

  // Clicking on the Customer Details icon will open the AddCustomerComponent
  customerDetails(customer: Customer) {
    // A reference to the modal:
    let modalRef = this.modal.open(CustomerDetailsComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal',
    });
    //Passing the id through the modal
    modalRef.componentInstance.id = customer.id;
  }

  // Clicking on the update icon will open the EditCustomerComponent
  updateCustomer(customer: Customer) {
    // A reference to the modal:
    let modalRef = this.modal.open(EditCustomerComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal',
    });
    //Passing the id through the modal
    modalRef.componentInstance.id = customer.id;
  }

  // delete specific customer
  deleteCustomer(customer: Customer) {
    if (confirm('Are you sure?')) {
      this.cs
        .deleteCustomer(customer)
        .then(() => console.log('Customer was deleted'))
        .catch((err) => console.log(err));
    }
  }
}
