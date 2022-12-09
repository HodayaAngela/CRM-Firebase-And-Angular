import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = { email: '', password: '' };

  // Injecting services:
  // 1.UsersService- from services folder
  // 2.Router-Login through the code after checking user details and not automatically through HTML
  constructor(private us: UsersService, private router: Router) {}

  ngOnInit(): void {
    // this.user = this.us.getUsers();
  }
  login() {
    // To check the object that comes from the user:
    // console.log(this.user);

    // Get the values ​​from the service
    //this.user: Email and password of the user who wants to login
    this.us
      .login(this.user)
      .then((data) => {
        // Check what returns from the promise:
        // console.log(data);

        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('email', data.user.email as string);

        this.router.navigateByUrl('dashbord/customers');
      })
      .catch((err) => {
        alert('Incorrect email or password');
        // this.reset();
        console.log(err.message);
      });
  }
  // Reset fields in case of success
  // reset() {
  //   this.user = { email: '', password: '' };
  // }

  loginWithGoogle() {
    // refers to the method in the service
    this.us
      .loginGoogle()
      .then((data) => {
        // console.log(data);

        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('email', data.user.email as string);
        this.router.navigateByUrl('dashbord/customers');
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
}
