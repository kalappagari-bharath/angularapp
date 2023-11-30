// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: "http://localhost:64098/",
  scopeUri: ["api://3c2656d0-2bfb-421b-be6e-2103c4145d4e/readacess"],
  tenantId: "9b415834-803a-4da0-afdc-fe6b1d52d649",
  uiClienId: "5cf331e6-d5cc-4ca7-8bc2-c224e0bfa508",
  redirectUrl: "http://localhost:4200",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
