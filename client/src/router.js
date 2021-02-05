Vue.use(Auth, {
    issuer: 'https://dev-33441242.okta.com/oauth2/default',
    clientId: '0oa54nd9o93iJuLRp5d6',
    redirectUri: window.location.origin + '/callback'
 });