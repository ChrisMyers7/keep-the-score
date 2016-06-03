angular.module('scoreApp')
  .controller('boardGamesCtrl', function($scope, boardGamesService) {

    $scope.players = boardGamesService.getPlayers();

    $scope.addNewPlayer = function(e) {
      if (e.keyCode === 13) {
      $scope.clickNewPlayer();
      }
    }

    $scope.clickNewPlayer = function() {
      boardGamesService.addPlayer($scope.playerInput);
      $scope.playerInput = '';
    }

})
