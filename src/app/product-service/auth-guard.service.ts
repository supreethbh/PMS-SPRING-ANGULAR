import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router,
    private authService: AuthenticationService) { }

  canActivate(route: AuthenticationService, state: RouterStateSnapshot) {
      if (this.authService.isUserLoggedIn()) {
        return true;
      } else {
        this.router.navigate(['login']);
        return false;
      }
  }

}
