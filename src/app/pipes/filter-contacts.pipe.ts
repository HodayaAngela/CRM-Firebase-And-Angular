import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../interfaces/Contact';

@Pipe({
  name: 'filterContacts',
})
export class FilterContactsPipe implements PipeTransform {
  // 1. The variable + type being manipulated
  // 2. The property I want to filter on - keyof :from interface
  // 3. value type
  transform(
    contacts: Contact[],
    propName: keyof Contact,
    value: string
  ): Contact[] {
    let filteredContacts: Contact[] = [];
    // To display the table before filtering:
    if (!value) return contacts;

    for (let contact of contacts) {
      if (
        // Get an object value using [propName]
        // as string for toLocaleLowerCase()
        (contact[propName] as string)
          .toLowerCase()
          .includes(value.toLowerCase())
      ) {
        filteredContacts.push(contact);
      }
    }

    // return a new filtered array
    return filteredContacts;
  }
}
