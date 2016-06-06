angular.module('scoreApp')
  .service('boardGamesService', function() {

    var players = [];

    this.getPlayers = function() {
      return players;
    }

    this.addPlayer = function(playerName) {
      if (players.length === 10) {
        return;
      }
      var newPlayer = {
        name: playerName,
        score: 0
      }
      players.push(newPlayer);
    }

  })
