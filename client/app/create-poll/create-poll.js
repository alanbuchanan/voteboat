'use strict';

angular.module('angFullstackCssApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/create-poll', {
        templateUrl: 'app/create-poll/create-poll.html',
        controller: 'CreatePollCtrl'
      });
  });
