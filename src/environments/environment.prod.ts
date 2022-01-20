export const environment = {
  production: true,
  isWebApp: false,
  apiUrl: "https://login.be-safetech.com/x4wnyp56gow2ffl/api",
  apiUrlProd: "https://login.be-safetech.com/x4wnyp56gow2ffl/api",
  apiUrlStaging: "https://besafetech-test.com/x4wnyp56gow2ffl/api",
  apiUrlDev: "https://cg.utopia-test.com/x4wnyp56gow2ffl/api",
  auth_config: {
    client_id: "0oa3im7kf6dZaX9gs5d7",
    server_host: "https://dev-57289077.okta.com/oauth2/default",
    redirect_url: "com.besafetechnologies.compliancegenie://auth/callback",
    end_session_redirect_url:
      "com.besafetechnologies.compliancegenie://auth/logout",
    scopes: "openid offline_access",
    pkce: true,
  },
};
