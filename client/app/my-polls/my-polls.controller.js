'use strict';

angular.module('angFullstackCssApp')
    .controller('MyPollsCtrl', function ($scope, $http, Auth) {
        $http.get('/api/polls').success(function (polls) {
            $scope.polls = polls;
        });

        $scope.getCurrentUser = Auth.getCurrentUser;

        $scope.radioData = {
            index: 0
        };

        $scope.currentPoll = {};

        $scope.submitForm = function (){
            console.log($scope.radioData.index);
            $scope.poll.answers[$scope.radioData.index].votes += 1;
            $scope.poll.save();
        };
    });
