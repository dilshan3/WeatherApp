import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-log-out-btn',
  templateUrl: './log-out-btn.component.html',
  styleUrls: ['./log-out-btn.component.css']
})
export class LogOutBtnComponent implements OnInit {
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logout();
  }
}
