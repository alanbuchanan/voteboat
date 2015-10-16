'use strict';

angular.module('angFullstackCssApp')
    .controller('ViewCtrl', function ($scope, $routeParams, $http) {
        $http.get('/api/polls/' + $routeParams._id).success(function (poll) {
            console.log(poll);
            $scope.poll = poll;
            $scope.radioData = {
                index: 0
            };
            $scope.viewPoll = true;

            $scope.alreadyVoted = false;

            $scope.submitForm = function () {
                $scope.alreadyVoted = true;
                console.log($scope.radioData.index);
                $scope.poll.answers[$scope.radioData.index].votes += 1;
                // Change database entry here
            };
        });
    });
