import { Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  Firestore,
  setDoc,
} from '@angular/fire/firestore';
import { addDoc } from '@firebase/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { Customer } from '../interfaces/Customer';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  // If the collection exists it will bring the access to it,
  //  if not it will create a new one and save it in the DB
  customerRef = collection(this.fs, 'customers');
  // Constructor injection to use the service of Firestore
  constructor(private fs: Firestore) {}

  // add new customer:
  // addDoc() :Adds a new reference to the collection
  // 1. reference 2. data
  addCustomer(customer: Customer): Promise<any> {
    return addDoc(this.customerRef, customer) as Promise<any>;
  }
  // get all customers from db
  getCustomer(): Observable<Customer[]> {
    // collectionData()
    //get: 1.reference 2. Id- to receive/delete/update customer (named id)
    return collectionData(this.customerRef, { idField: 'id' }) as Observable<
      Customer[]
    >;
  }

  // update specific customer
  updateCustomer(newCustomer: Customer): Promise<any> {
    // setDoc():
    // 1. doc()
    // 2. data
    let customerRef = doc(this.fs, `customers/${newCustomer.id}`);
    return setDoc(customerRef, newCustomer) as Promise<any>;
  }

  // delete specific customer
  deleteCustomer(customer: Customer): Promise<void> {
    // doc():
    // 1. It takes references of database from Firestore,
    // 2. Collection name and ID of a document as arguments
    let customerRef = doc(this.fs, `customers/${customer.id}`);
    return deleteDoc(customerRef) as Promise<void>;
  }

  // get specific customer by id
  getCustomerById(id: string): Observable<Customer> {
    // docData():
    // 1. doc()
    // 2. getting the ID
    let customerRef = doc(this.fs, `customers/${id}`);
    return docData(customerRef, { idField: 'id' }) as Observable<Customer>;
  }
}
