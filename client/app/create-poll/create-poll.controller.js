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


        $scope.isInvalid = function () {
            return $scope.poll.title === '' ||
                $scope.poll.answers[0].value.length === 0 ||
                $scope.poll.answers[1].value.length === 0;
        }

        $scope.savePoll = function () {

            $scope.poll.answers.forEach(function (answer, index) {
                if(answer.value === "" || answer.value === undefined) {
                    $scope.poll.answers.splice(index, 1);
                    //console.log($scope.poll.answers);
                }
            });

            $scope.poll.creator = $scope.getCurrentUser().name;
            $http.post('/api/polls', $scope.poll).then(function () {
              $location.path('/my-polls');
            });
        };
    });
