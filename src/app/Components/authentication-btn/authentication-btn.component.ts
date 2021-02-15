import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-authentication-btn',
  templateUrl: './authentication-btn.component.html',
  styleUrls: ['./authentication-btn.component.css']
})
export class AuthenticationBtnComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }



}
