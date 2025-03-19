// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { initializeApp } from "firebase/app";

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyCHn-9RXoI8MByCxRlnI5z5QoEBkFDFGPw",
  authDomain: "appcumple-5d4bc.firebaseapp.com",
  projectId: "appcumple-5d4bc",
  storageBucket: "appcumple-5d4bc.firebasestorage.app",
  messagingSenderId: "691464392377",
  appId: "1:691464392377:web:151d6c7f8d7d86f7b15568"
  },

};

const app = initializeApp(environment.firebaseConfig);


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
