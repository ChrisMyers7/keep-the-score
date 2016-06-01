angular.module('scoreApp')
  .controller('sportsCtrl', function($scope, sportsService) {

    $scope.team1 = 0;

    $scope.incrementTeam1 = function() {
      $scope.team1++;
    }

    $scope.decrementTeam1 = function() {
      if ($scope.team1 === 0) {
        return;
      }
      $scope.team1--;
    }



    $scope.team2 = 0;

    $scope.incrementTeam2 = function() {
      $scope.team2++;
    }

    $scope.decrementTeam2 = function() {
      if ($scope.team2 === 0) {
        return;
      }
      $scope.team2--;
    }

  })
