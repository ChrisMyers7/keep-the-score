angular.module('scoreApp')
  .service('sportsService', function() {

    var teams = [];

    this.getTeam = function() {
      return teams;
    }

    this.addTeam = function(teamName) {
      if (teams.length === 2) {
        return;
      }
      var newTeam = {
        name: teamName,
        score: 0
      }
      teams.push(newTeam);
    }

  })
