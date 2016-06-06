angular.module('scoreApp')
  .service('sportsService', function() {

    var teams = [];

    this.getTeam = function() {
      return teams;
    }

    this.addTeam = function(teamName) {
      var newTeam = {
        name: teamName,
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
      teams.push(newTeam);
    }

  })
