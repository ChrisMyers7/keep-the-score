angular.module('scoreApp')
  .controller('sportsCtrl', function($scope, sportsService) {

    $scope.teams = sportsService.getTeam();

    $scope.enterTeam = function(e) {
      if (e.keyCode === 13) {
        $scope.addTeam();
      }
    }

    $scope.addTeam = function() {
      sportsService.addTeam($scope.teamInput);
      $scope.teamInput = '';
    }

    $scope.incrementScore = function(e, scoreInput) {
      if (scoreInput) {
        $scope.teams[e].score = $scope.teams[e].score + parseInt(scoreInput);
      } else {
        $scope.teams[e].score++;
      }
    }

    $scope.decrementScore = function(e, scoreInput) {
      if (scoreInput) {
        $scope.teams[e].score = $scope.teams[e].score - parseInt(scoreInput);
      } else {
        $scope.teams[e].score--;
      }
    }

    $scope.deleteTeam = function(e) {
      $scope.teams.splice(e,1);
    }
  })
