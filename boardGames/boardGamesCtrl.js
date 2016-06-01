angular.module('scoreApp')
  .controller('boardGamesCtrl', function($scope, boardGamesService) {

    $scope.players = boardGamesService.getPlayers();

    $scope.addPlayer = boardGamesService.addPlayer($scope.playerInput)

  })
