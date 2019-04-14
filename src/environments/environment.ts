// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
import 'zone.js/dist/zone-error';

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCDz0_dZYSu-R5LpJGWGswbtg653RCX4cE',
    authDomain: 'angular-fitness-tracker-53d90.firebaseapp.com',
    databaseURL: 'https://angular-fitness-tracker-53d90.firebaseio.com',
    projectId: 'angular-fitness-tracker-53d90',
    storageBucket: 'angular-fitness-tracker-53d90.appspot.com',
    messagingSenderId: '394114098207'
  }
};
