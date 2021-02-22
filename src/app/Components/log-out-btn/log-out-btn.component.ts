import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-log-out-btn',
  templateUrl: './log-out-btn.component.html',
  styleUrls: ['./log-out-btn.component.css']
})
export class LogOutBtnComponent implements OnInit {
  constructor(private authService: AuthService,
    protected lStorage: LocalStorage) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logout();
    try{
      localStorage.clear();
    }catch(e){
      console.log('Error: ', e);
    }
  }
}
