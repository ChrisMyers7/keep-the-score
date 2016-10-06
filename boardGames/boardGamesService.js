angular.module('scoreApp')
  .service('boardGamesService', function() {

    // function updateStorage() {
    //   localStorage.setItem('players', JSON.stringify(players))
    // }

    var players = [];

    // if (localStorage.getItem('players')) {
    //   players = JSON.parse(localStorage.getItem('quotes'));
    // }


    this.getPlayers = function() {
      // updateStorage()
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
      // updateStorage();
    }

  })
