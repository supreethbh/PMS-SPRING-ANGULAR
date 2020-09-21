import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../product-service/authentication.service';
import { Address } from './address';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin = false;

  constructor(private router:Router,
              private authService: AuthenticationService) { }

  ngOnInit(): void {
  }
                      
  checkLogin(data) {        
    if(this.authService.authenticate(data.username, data.password)){
      this.router.navigate(['']);
      this.invalidLogin = false;
      alert("Login Successfull..!"); 
    } else {
      this.invalidLogin = true;
    }
  } 
  
}
