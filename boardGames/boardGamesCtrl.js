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

    $scope.incrementScore = function(e, scoreInput) {
      if (scoreInput) {
        $scope.players[e].score = $scope.players[e].score + parseInt(scoreInput);
      } else {
        $scope.players[e].score++;
      }
    }

    $scope.decrementScore = function(e, scoreInput) {
      if (scoreInput) {
        $scope.players[e].score = $scope.players[e].score - parseInt(scoreInput);
      } else {
        $scope.players[e].score--;
      }
    }

    $scope.deletePlayer = function(e) {
      $scope.players.splice(e,1);
    }

})
