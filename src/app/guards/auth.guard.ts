import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  // For routing not automatically but only after checking user details:
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // Checking the value we received in sessionStorage
    // If matched=> redirect to home page
    if (sessionStorage.getItem('isLoggedIn') == 'true') return true;

    alert('You are not allowed to access this page');
    // Routing through the code
    this.router.navigateByUrl('login');
    return false;
  }
}
