'use strict';

angular.module('angFullstackCssApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/view/:_id', {
        templateUrl: 'app/view/view.html',
        controller: 'ViewCtrl'
      });
  });
