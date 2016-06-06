angular.module('scoreApp')
  .controller('sportsCtrl', function($scope, sportsService) {

    $scope.teams = sportsService.getTeam();

    $scope.enterTeam = function(e) {
      if (e.keyCode === 13) {
        $scope.addTeam();
      }
    }

    $scope.addTeam = function() {
      console.log('b');
      sportsService.addTeam($scope.teamInput);
      $scope.teamInput = '';
    }

  })
