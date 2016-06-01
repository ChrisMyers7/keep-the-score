angular.module('scoreApp')
  .controller('homeCtrl', function($scope, homeService, $state) {

    $scope.goSports = function() {
      $state.go('sports');
    }

    $scope.goBoardGames = function() {
      $state.go('boardGames')
    }

  })
