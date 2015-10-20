'use strict';

angular.module('angFullstackCssApp')
    .controller('MyPollsCtrl', function ($scope, $http, Auth) {

        $scope.getCurrentUser = Auth.getCurrentUser;

        //console.log('user: ' + $scope.getCurrentUser().name);

        $http.get('/api/polls').success(function (polls) {
            //console.log(polls);

            $scope.polls = [];

            polls.forEach(function (poll) {
                if(poll.creator === $scope.getCurrentUser().name){
                    $scope.polls.push(poll);
                }
            });

            //console.log($scope.polls);

        });


        $scope.radioData = {
            index: 0
        };

        $scope.currentPoll = {};

        $scope.deletePoll = function (index, id) {
            //console.log(index);
            
            $http.delete('/api/polls/' + id).success(function (poll) {
                $scope.polls.splice(index, 1);
            });
        };

        $scope.submitForm = function (){
            //console.log($scope.radioData.index);
            $scope.poll.answers[$scope.radioData.index].votes += 1;
            $scope.poll.save();
        };
    });
