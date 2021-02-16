import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { ViewWeatherComponent } from './Components/view-weather/view-weather.component';
import { HeaderComponent } from './Components/Common/header/header.component';
import { SignInBtnComponent } from './Components/sign-in-btn/sign-in-btn.component';
import { LogOutBtnComponent } from './Components/log-out-btn/log-out-btn.component';
import { AuthenticationBtnComponent } from './Components/authentication-btn/authentication-btn.component';
import { WeatherComponent } from './Components/weather/weather.component';

import { AuthModule } from '@auth0/auth0-angular';


@NgModule({
  declarations: [
    AppComponent,
    ViewWeatherComponent,
    HeaderComponent,
    SignInBtnComponent,
    LogOutBtnComponent,
    AuthenticationBtnComponent,
    WeatherComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'dev-ljjtxlva.us.auth0.com',
      clientId: 'y8QYq1H5EEbk3TUtVR3BRV0vpZvpz2id',
      redirectUri: window.location.origin,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
