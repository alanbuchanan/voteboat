'use strict';

angular.module('angFullstackCssApp')
    .controller('MainCtrl', function ($scope, $http, Auth) {
        $scope.polls = [];

        $scope.isAdmin = Auth.isAdmin;

        $http.get('/api/polls').success(function (polls) {
            console.log(polls);
            $scope.polls = polls;
        });

        $scope.addThing = function () {
            if ($scope.newThing === '') {
                return;
            }
            $http.post('/api/things', {name: $scope.newThing});
            $scope.newThing = '';
        };

        $scope.deletePoll = function (index, id) {
            console.log(index);

            $http.delete('/api/polls/' + id).success(function (poll) {
                $scope.polls.splice(index, 1);
            });
        };
    });
