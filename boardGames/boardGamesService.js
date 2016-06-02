angular.module('scoreApp')
  .service('boardGamesService', function() {

    var players = [];

    this.getPlayers = function() {
      return players;
    }

    this.addPlayer = function(playerName) {
      var newPlayer = {
        name: playerName,
        score: 0,
        incrementScore: function() {
          this.score++;
        },
        decrementScore: function() {
          if (this.score === 0) {
            return;
          }
          this.score--;
        }
      }
      players.push(newPlayer);
    }

  })
