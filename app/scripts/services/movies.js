'use strict';

/**
 * @ngdoc service
 * @name angularProjectApp.Movies
 * @description
 * # Movies
 * Factory in the angularProjectApp.
 */
angular.module('angularProjectApp')
  .factory('Movies', ['$q', function($q) {
    // Service logic
    var key = 'moviemania:movies';

    function loadMovies() {
      return JSON.parse(localStorage.getItem(key)) || [];
    }

    // Public API here
    return {
      load: function() {
        return $q.when(loadMovies());
      },
      get: function(id) {
        var foundMovie;
        var movies = loadMovies();
        for(var index in movies) {
          if(!movies.hasOwnProperty(index)) {
            continue;
          }
          var movie = movies[index];
          if(movie.id === id) {
            foundMovie = movie;
            break;
          }
        }
        return $q.when(foundMovie);
      },
      add: function(obj) {
        var movies = loadMovies();
        obj.id = movies.length;
        obj.slug = obj.title.toLowerCase().replace(/ /g, '-');
        movies.push(obj);
        localStorage.setItem(key, JSON.stringify(movies));
      }
    };
  }]);
