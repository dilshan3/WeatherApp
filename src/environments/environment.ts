// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  AUTH_CONFIG:{
    DOMAIN: 'dev-ljjtxlva.us.auth0.com',
    CLIENTId: 'y8QYq1H5EEbk3TUtVR3BRV0vpZvpz2id',
    redirectUri: window.location.origin,
  },
  OPENWEATHER_CONFIG:{
    APIKEY: 'c855d48a1407931428c1d7f302f4fc68'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
