import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  UserCredential,
} from '@angular/fire/auth';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  // Registered users through the service:
  // array of Users:
  // user: User[] = [
  //   { email: 'Hodayda@gmail.com', password: '123456d78' },
  //   { email: 'IsraelIsaraeli@gmail.com', password: '55997722' },
  // ];

  // Injecting firebase service for  authentication
  constructor(private auth: Auth) {}

  // Getter for each of the service
  // User will return an array of User
  // getUsers(): User[] {
  //   return this.user;
  // }

  // The method checks that email and password match with the data stored in Firebase
  login(user: User): Promise<UserCredential> {
    // signInWithEmailAndPassword()
    // 1. service
    //2.  email & password
    return signInWithEmailAndPassword(this.auth, user.email, user.password);
  }

  loginGoogle(): Promise<UserCredential> {
    // 1. service
    // 2. An object of class type
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  // Disconnecting all connections
  logOut() {
    return this.auth.signOut();
  }

  register(newUser: User): Promise<UserCredential> {
    return createUserWithEmailAndPassword(
      this.auth,
      newUser.email,
      newUser.password
    );
  }
}
