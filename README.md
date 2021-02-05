# A CRUD Example App with Vue, Spring Boot, and Kotlin
 
This example app shows how to build a basic CRUD app with Spring Boot Kotlin, Spring Data, and Vue.js. Please read [Build a CRUD App with Vue.js, Spring Boot, and Kotlin](https://developer.okta.com/blog/2020/06/26/spring-boot-vue-kotlin) to see how this app was created.

**Prerequisites:** 

* [Node 12](https://nodejs.org/)+
* [Yarn](https://classic.yarnpkg.com/en/docs/install)
* [Java 11](https://adoptopenjdk.net/)+
* An [Okta Developer Account if you haven't one](https://developer.okta.com/signup/)
* An [Okta Developer Account if you have one](https://okta-devok12.okta.com/signin/)


> [Okta](https://developer.okta.com/) has Authentication and User Management APIs that reduce development time with instant-on, scalable user infrastructure. Okta's intuitive API and expert support make it easy for developers to authenticate, manage and secure users and roles in any application.

* [Getting Started](#getting-started)
* [Links](#links)
* [Help](#help)
* [License](#license)

## Getting Started

To install this example application, run the following commands:

```bash
git clone -b auth https://github.com/oktadeveloper/okta-kotlin-spring-boot-vue-example.git
cd okta-kotlin-spring-boot-vue-example
```

This will get a copy of the project installed locally. To install all of its dependencies and start each app, follow the instructions below.

### Spring Boot Configuration

To create a new OIDC app for Spring Boot on Okta:

1. Log in to your developer account, navigate to **Applications**, and click on **Add Application**.
2. Select **Web** and click **Next**. 
3. Give the application a name and add `http://localhost:9000/login/oauth2/code/okta` as a login redirect URI. 
4. Click **Done**.

Add your issuer and client ID to `server/src/main/resources/application.properties`.

```properties
okta.oauth2.issuer=https://$YOUR_OKTA_DOMAIN/oauth2/default
okta.oauth2.clientId=$YOUR_CLIENT_ID
```

**NOTE:** The value of `$YOUR_OKTA_DOMAIN` should be something like `dev-123456.okta.com`. Make sure you don't include `-admin` in the value!

Start your Spring Boot app by navigating to the `server` directory and starting your app.

```bash
cd server
./gradlew bootRun
```

### Vue Configuration

To create a new OIDC app for Vue on Okta:

1. Log in to your developer account, navigate to **Applications**, and click on **Add Application**.
3. Select **Single-Page App** and click **Next**. 
4. Give the application a name, set the login redirect URI to `http://localhost:8080/callback`, and click **Done**.

Copy the `issuer` and `clientId` into `client/src/router.js`.

```javascript
Vue.use(Auth, {
   issuer: 'https://$YOUR_OKTA_DOMAIN/oauth2/default',
   clientId: '$YOUR_CLIENT_ID',
   redirectUri: window.location.origin + '/callback'
});
```

Navigate into the `client` folder and run:
 
```bash
npm install && yarn serve
```

Open your browser to <http://localhost:8080>, log in, and create todos to your hearts content!

## Links

This example uses the following open source libraries from Okta:

* [Okta Spring Boot Starter](https://github.com/okta/okta-spring-boot)
* [Okta Vue SDK](https://github.com/okta/okta-oidc-js/tree/master/packages/okta-vue)

## Help

Please post any questions as comments on the [blog post](https://developer.okta.com/blog/2020/06/26/spring-boot-vue-kotlin), or visit our [Okta Developer Forums](https://devforum.okta.com/).

## License

Apache 2.0, see [LICENSE](LICENSE).
