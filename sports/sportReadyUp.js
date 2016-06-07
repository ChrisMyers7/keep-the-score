angular.module('scoreApp')
  .directive('sportReadyUp', function($document) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        $('.hidden-footer-button').hide();
        $('.i-choose-you').hide();
        var display = '';
        element.on('click', function() {
          $('.sports-input-container').toggle(display);
        });
        element.on('click', function() {
          $('.i-choose-you').toggle(display);
        });
        element.on('click', function() {
          $('.ready-up-button').toggle(display);
        });
        element.on('click', function() {
          $('.hidden-footer-button').toggle(display);
        });
        element.on('click', function() {
          $('.input-score').toggle(display);
        })
        element.on('click', function() {
          $('.delete-button').toggle(display);
        })
      }
    }
  })
