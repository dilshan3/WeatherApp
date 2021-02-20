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
import { FooterComponent } from './Components/Common/footer/footer.component';

import { AuthModule } from '@auth0/auth0-angular';

import { environment } from '../environments/environment';
import { LoadingSpinnerComponent } from './Components/loading-spinner/loading-spinner.component';
import { HomeComponent } from './Components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewWeatherComponent,
    HeaderComponent,
    SignInBtnComponent,
    LogOutBtnComponent,
    AuthenticationBtnComponent,
    WeatherComponent,
    FooterComponent,
    LoadingSpinnerComponent,
    HomeComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: environment.AUTH_CONFIG.DOMAIN,
      clientId: environment.AUTH_CONFIG.CLIENTId,
      redirectUri: environment.AUTH_CONFIG.redirectUri,
      cacheLocation: 'localstorage'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
