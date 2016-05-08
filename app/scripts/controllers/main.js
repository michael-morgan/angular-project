'use strict';

/**
 * @ngdoc function
 * @name angularProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularProjectApp
 */
angular.module('angularProjectApp')
  .controller('MainCtrl', function($scope, $location, $http) {
    $http.get('/movies.json').success(function(data, status, headers, config) {
      console.debug(data);
      $scope.movies = data;
    }).error(function(data, status, headers, config) {
      console.error(data, status, headers, config);
      if(status === 404) {
        window.alert('404 file not found.');
      }
      else {
        window.alert('Unknown error.');
      }
    });

    $scope.closed = false;

    $scope.movie = {
      title: '',
      image: 'http://lorempixel.com/200/300/',
      description: ''
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
      if($scope.movie.title.length > 0) {
        console.debug($scope.movie.title);
      }
      else {
        window.alert('Title is required');
      }
    };

    $scope.addMovie = function() {
      $scope.movies.push(angular.copy($scope.movie));
    };

    $scope.checkCategorySelected = function() {
      if($scope.movie.category === '') {
        window.alert('Category cannot be empty.');
      }
    };

    $scope.checkDescription = function() {
      console.debug($scope.movie.description);
    };
  });
