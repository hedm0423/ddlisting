/* jshint node: true */

module.exports = function(environment) {

    // var firebaseAppUrl = 'https://luminous-heat-9079.firebaseio.com/';

  var ENV = {
    modulePrefix: 'ddlisting',
    environment: environment,
    contentSecurityPolicy: {
        'default-src': "'none'",
        'script-src': "'self' 'unsafe-inline' 'unsafe-eval' *",
        'font-src': "'self' *",
        'connect-src': "'self' *",
        'img-src': "'self' *",
        'style-src': "'self' 'unsafe-inline' *",
        'frame-src': "*"

        // 'script-src': "'self' 'unsafe-eval' apis.google.com'",
        // 'frame-src': ''self' https://*.firebaseapp.com',
        // 'connect-src': ''self' wss://*.firebaseio.com https://*.googleapis.com'
    },
    firebase: {
        // apiKey: "AIzaSyDqkMj_1Z6XKeUSZngy30bLVZvhrL7qBh8",
        // authDomain: "luminous-heat-9079.firebaseapp.com",
        // databaseURL: "https://luminous-heat-9079.firebaseio.com",
        // storageBucket: "luminous-heat-9079.appspot.com"
        apiKey: "AIzaSyALZOzYZbc3Rp7t5zvfW4JKbEwJIZQaAq0",
        authDomain: "ddlisting-49d6e.firebaseapp.com",
        databaseURL: "https://ddlisting-49d6e.firebaseio.com",
        storageBucket: "ddlisting-49d6e.appspot.com"
    },
    // 权限控制
    // torii: {
    //     sessionServiceName: 'session'
    // },
    // contentSecurityPolicy: { 'connect-src': "'self' https://auth.firebase.com wss://*.firebaseio.com" },
    // firebase: firebaseAppUrl,
    baseURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      API_HOST: 'http://localhost:8080'
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
