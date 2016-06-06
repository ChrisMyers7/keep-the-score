angular.module('scoreApp')
  .directive('boardgameReadyUp', function($document) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        $('.board-play').hide();
        $('.hidden-footer-button').hide();
        var display = '';
        element.on('click', function() {
          $('.board-input-player').toggle(display);
        });
        element.on('click', function() {
          $('.board-play').toggle(display);
        });
        element.on('click', function() {
          $('.ready-button').toggle(display);
        });
        element.on('click', function() {
          $('.ready-up-button').toggle(display);
        });
        element.on('click', function() {
          $('.board-input-score').toggle(display);
        });
      }
    }
  })
