import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  // email in sessionStorage
  email!: string;
  constructor(private us: UsersService, private router: Router) {}

  ngOnInit(): void {
    //  display user's email  when connected
    this.email = sessionStorage.getItem('email') as string;
  }

  logOut(): void {
    //When passed a key name, it will remove that key from the given Storage object if it exists
    this.us
      .logOut()
      .then(() => {
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('isLoggedIn');
        this.router.navigateByUrl('login');
      })
      .catch((err) => console.log(err));
  }
}
