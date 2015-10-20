'use strict';

angular.module('angFullstackCssApp')
    .controller('ViewCtrl', function ($scope, $routeParams, $http, Auth) {

        $http.get('/api/polls/' + $routeParams._id).success(function (poll) {
            $scope.poll = poll;
            $scope.radioData = {
                index: 0
            };

            var colors = ["#81F0E5", "#78C091", "#6E9075", "#5B6057", 'red', 'blue', 'green', 'yellow'];

            var data = [];

            var render = function () {
                data = [];

                //console.log('rendering...', poll);

                poll.answers.forEach(function (answer, index) {
                    var objToAppend = {};
                    objToAppend.label = answer.value;
                    objToAppend.value = answer.votes;
                    objToAppend.color = colors[index % colors.length];
                    data.push(objToAppend);
                    $('#myChart').replaceWith('<canvas id="myChart" width="200" height="200"></canvas>');
                    var ctx = document.getElementById("myChart").getContext("2d");
                    var myNewChart = new Chart(ctx).Pie(data);
                });

            };


            render();

            console.log($scope.poll);

            $scope.isLoggedIn = Auth.isLoggedIn;

            var removeData = function () {
                data.forEach(function (element, index) {
                    myNewChart.removeData(index);
                });
            };

            $scope.alreadyVoted = false;

            $scope.submitForm = function () {
            $scope.alreadyVoted = true;
                console.log($scope.radioData.index);
                $scope.poll.answers[$scope.radioData.index].votes += 1;
                $http.put('/api/polls/' + $routeParams._id, {answers: $scope.poll.answers}).success(function () {
                    //console.log('success');
                    render();
                });

            };
        });
    });
