'use strict';

/**
 * @ngdoc function
 * @name angularProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularProjectApp
 */
angular.module('angularProjectApp')
  .controller('MainCtrl', function($scope) {
    // dummy data till we connect to API.
    $scope.movies = [
      {
        title: 'Ace Drummond',
        image: 'http://lorempixel.com/200/300/',
        description: 'This 13 chapter serial is based on the comic strip character.'
      },
      {
        title: 'Rice Drummond',
        image: 'http://lorempixel.com/200/300/',
        description: 'This 14 chapter serial is based on the comic strip character.'
      },
      {
        title: 'Nice Drummond',
        image: 'http://lorempixel.com/200/300/',
        description: 'This 15 chapter serial is based on the comic strip character.'
      },
      {
        title: 'Nerd Drummond',
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
