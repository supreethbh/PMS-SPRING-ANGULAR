import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../product-service/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthenticationService,
              private router: Router) { }

  ngOnInit(): void {
    this.authService.logout();
    alert("Logout Successfull..!"); 
    this.router.navigate(['login']);
  }

}
