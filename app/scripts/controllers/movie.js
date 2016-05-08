'use strict';

/**
 * Created by michael on 07/05/16.
 */
angular.module('angularProjectApp')
  .controller('MovieCtrl', function($scope, $routeParams) {
    console.debug($routeParams);
    var id = parseInt($routeParams.id, 10);

    var movies = [
      {
        id: 1,
        title: 'Ace Drummond',
        slug: 'ace-drummond',
        image: 'http://lorempixel.com/200/300/',
        description: 'This 13 chapter serial is based on the comic strip character.'
      },
      {
        id: 2,
        title: 'Rice Drummond',
        slug: 'rice-drummond',
        image: 'http://lorempixel.com/200/300/',
        description: 'This 14 chapter serial is based on the comic strip character.'
      },
      {
        id: 3,
        title: 'Nice Drummond',
        slug: 'nice-drummond',
        image: 'http://lorempixel.com/200/300/',
        description: 'This 15 chapter serial is based on the comic strip character.'
      },
      {
        id: 4,
        title: 'Nerd Drummond',
        slug: 'nerd-drummond',
        image: 'http://lorempixel.com/200/300/',
        description: 'This 16 chapter serial is based on the comic strip character.'
      }
    ];

    for(var index in movies) {
      if(!movies.hasOwnProperty(index)) {
        continue;
      }

      var movie = movies[index];
      if(movie.id === id) {
        $scope.movie = movie;
        break;
      }
    }
  });
