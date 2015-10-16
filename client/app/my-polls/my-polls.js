'use strict';

angular.module('angFullstackCssApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/my-polls', {
        templateUrl: 'app/my-polls/my-polls.html',
        controller: 'MyPollsCtrl'
      });
  });
