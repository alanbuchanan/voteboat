'use strict';

angular.module('angFullstackCssApp')
    .controller('CreatePollCtrl', function ($scope, $http, $location, Auth) {
        $scope.poll = {};

        $scope.poll.title = '';

        $scope.poll.answers = [
            {value: "", votes: 0},
            {value: "", votes: 0}
        ];

        $scope.addOptionField = function () {
            $scope.poll.answers.push({value: "", votes: 0});
        };

        $scope.getCurrentUser = Auth.getCurrentUser;

        $scope.savePoll = function () {
            $scope.poll.creator = $scope.getCurrentUser().name;
            $http.post('/api/polls', $scope.poll).then(function () {
              $location.path('/my-polls');
            });
        };
    });
