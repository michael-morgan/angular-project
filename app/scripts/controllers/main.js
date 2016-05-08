'use strict';

/**
 * @ngdoc function
 * @name angularProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularProjectApp
 */
angular.module('angularProjectApp')
  .controller('MainCtrl', ['$scope', '$location', 'Movies', function($scope, $location, Movies) {
    Movies.load().then(function(listOfMovies) {
      $scope.movies = listOfMovies;
    });

    $scope.closed = false;

    $scope.movie = {
      title: '',
      description: '',
      category: '',
      image: 'http://lorempixel.com/200/300/'
    };

    $scope.randomMovie = function() {
      var index = Math.floor(Math.random() * $scope.movies.length);
      var movie = $scope.movies[index];
      var url = 'movie/' + movie.id + '/' + movie.slug;
      $location.url(url);
    };

    $scope.isValid = function() {
      return ($scope.movie.title &&
      $scope.movie.description &&
      $scope.movie.category);
    };

    $scope.validateTitle = function() {
      if($scope.movie.title.length === 0) {
        window.alert('Title is required');
      }
    };

    $scope.addMovie = function() {
      $scope.movies.push(angular.copy($scope.movie));
      Movies.add($scope.movie);
    };

    $scope.checkCategorySelected = function() {
      if(!$scope.movie.category) {
        window.alert('Category cannot be empty.');
      }
    };

    $scope.checkDescription = function() {
      console.debug($scope.movie.description);
    };
  }]);
