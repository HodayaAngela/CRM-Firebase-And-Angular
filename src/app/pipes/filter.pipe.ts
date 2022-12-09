import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../interfaces/Customer';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  // 1. The variable + type being manipulated
  // 2. The property I want to filter on - keyof :from interface
  // 3. value type
  transform(
    customers: Customer[],
    propName: keyof Customer,
    value: string
  ): Customer[] {
    let filteredCustomers: Customer[] = [];
    // To display the table before filtering:
    if (!value) return customers;

    for (let customer of customers) {
      console.log(customer[propName]);

      if (
        // Get an object value using [propName]
        // as string for toLocaleLowerCase()
        (customer[propName] as string)
          .toLowerCase()
          .includes(value.toLowerCase())
        // value.toLowerCase()
      ) {
        filteredCustomers.push(customer);
      }
    }

    // return a new filtered array
    return filteredCustomers;
  }
}
