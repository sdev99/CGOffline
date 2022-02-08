// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  isWebApp: false,
  siteBaseUrl: "https://cg.utopia-test.com",
  apiUrl: "https://cg.utopia-test.com/x4wnyp56gow2ffl/api",
  apiUrlProd: "https://login.be-safetech.com/x4wnyp56gow2ffl/api",
  apiUrlStaging: "https://besafetech-test.com/x4wnyp56gow2ffl/api",
  apiUrlDev: "https://cg.utopia-test.com/x4wnyp56gow2ffl/api",
  auth_config: {
    // client_id: "0oa3mgn5daNWMITgX5d7",
    // server_host: "https://dev-57289077.okta.com/oauth2/default",
    redirect_url: "com.besafetechnologies.compliancegenie://auth/callback",
    end_session_redirect_url:
      "com.besafetechnologies.compliancegenie://auth/logout",
    scopes: "openid offline_access email",
    pkce: true,
    audience: "api://default",
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
