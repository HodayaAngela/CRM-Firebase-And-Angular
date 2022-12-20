import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(private us: UsersService, private router: Router) {}

  ngOnInit(): void {}

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
