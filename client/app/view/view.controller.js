'use strict';

angular.module('angFullstackCssApp')
    .controller('ViewCtrl', function ($scope, $routeParams, $http) {
        $http.get('/api/polls/' + $routeParams._id).success(function (poll) {
            console.log(poll);
            $scope.poll = poll;
            $scope.radioData = {
                index: 0
            };

            $scope.submitForm = function () {
                console.log($scope.radioData.index);
                $scope.poll.answers[$scope.radioData.index].votes += 1;
                console.log('scope poll answers:- ', $scope.poll.answers);
                console.log('scope poll answers[index]:- ', $scope.poll.answers[$scope.radioData.index]);
                console.log('votes:- ', $scope.poll.answers[$scope.radioData.index].votes);
                // Change database entry here
                $http.put('/api/polls/' + $routeParams._id, {answers: $scope.poll.answers}).success(function () {
                    console.log('success');
                });
            };
        });
    });
