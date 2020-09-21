import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './product-service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Product Management';
  
  constructor(public loginservice: AuthenticationService) { }
  
  ngOnInit(): void {
  }
  
}
