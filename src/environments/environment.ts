// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'vinota-1287',
    appId: '1:496524421401:web:18d0194ccc06f6098cbd88',
    databaseURL: 'https://vinota-1287.firebaseio.com',
    storageBucket: 'vinota-1287.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyD3BRy0l_pSY3Sq_fcfBFt83Nyh_4CPeIk',
    authDomain: 'vinota-1287.firebaseapp.com',
    messagingSenderId: '496524421401',
    measurementId: 'G-CFT91KJ9X4',
  },
  production: false,
  imageURL:"/dist/vinota-v2-angular"
};

export const environmentEmail = {
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
