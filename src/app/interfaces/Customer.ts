export interface Customer {
  //id - identify a customer by his id
  // ?- Question mark - not required
  // The id will come from the FIRESTORE DB
  id?: string;
  firstName: string;
  lastName: string;
  phone: string;
  email?: string;
}
