angular.module('scoreApp', ['ui.router'])

  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/home/home-tmpl.html',
        controller:'homeCtrl'
      })
      .state('boardGames', {
        url: '/boardGames',
        templateUrl: '/boardGames/board-games-tmpl.html',
        controller:'boardGamesCtrl'
      })
      .state('sports', {
        url: '/sports',
        templateUrl: '/sports/sports-tmpl.html',
        controller:'sportsCtrl'
      })
      // .otherwise('home', {
      //   url: '/',
      //   templateUrl: '/home/home-tmpl.html',
      //   controller:'homeCtrl'
      // })
  })
