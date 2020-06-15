import Auth from '@okta/okta-vue';
import Vue from 'vue'
import Router from 'vue-router'
import Todos from './components/Todos'

Vue.use(Auth, {
  issuer: 'https://dev-133320.okta.com/oauth2/default',
  clientId: '0oa49nnju7OTrvbZM357',
  redirectUri: window.location.origin + '/callback'
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
      path: '/callback',
      component: Auth.handleCallback(),
    },
  ]
});

router.beforeEach(Vue.prototype.$auth.authRedirectGuard());

export default router;
