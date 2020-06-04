import Auth from "@okta/okta-vue";
import Vue from 'vue'
import Router from 'vue-router'
import Todos from './components/Todos'

Vue.use(Auth, {
    issuer: 'https://dev-447850.okta.com/oauth2/default',
    clientId: '0oae3d5y7y9hGoiEL4x6',
    redirectUri: window.location.origin + '/implicit/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true
});

Vue.use(Router);

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Todos',
            component: Todos,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/implicit/callback',
            component: Auth.handleCallback(),
        },
    ]
});

router.beforeEach(Vue.prototype.$auth.authRedirectGuard());

export default router;