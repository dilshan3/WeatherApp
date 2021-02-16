import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-sign-in-btn',
  templateUrl: './sign-in-btn.component.html',
  styleUrls: ['./sign-in-btn.component.css']
})
export class SignInBtnComponent implements OnInit {
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  loginWithRedirect(): void {
    this.authService.loginWithRedirect();
  }
}
