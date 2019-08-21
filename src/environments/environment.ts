// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  parts: [
    'people',
    'planets',
    'films',
    'species',
    'vehicles',
    'starships'
  ],
  paths: {
    people: 'https://swapi.co/api/people/',
    planets: 'https://swapi.co/api/planets/',
    films: 'https://swapi.co/api/films/',
    species: 'https://swapi.co/api/species/',
    vehicles: 'https://swapi.co/api/vehicles/',
    starships: 'https://swapi.co/api/starships/'
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
