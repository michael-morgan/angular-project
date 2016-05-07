'use strict';

/**
 * @ngdoc function
 * @name angularProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularProjectApp
 */
angular.module('angularProjectApp')
  .controller('MainCtrl', function($scope, $location) {
    // dummy data till we connect to API.
    $scope.movies = [
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

    $scope.validateTitle = () => {
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
