'use strict';

angular.module('championApp.auth', [
  'championApp.constants',
  'championApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
