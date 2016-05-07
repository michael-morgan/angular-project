'use strict';

/**
 * @ngdoc function
 * @name angularProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularProjectApp
 */
angular.module('angularProjectApp')
  .controller('MainCtrl', ($scope) => {
    let movies = [
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
    $scope.movies = movies;

    $scope.newMovieTitle = '';
    $scope.newMovieDescription = '';
    $scope.newMovieImage = 'http://lorempixel.com/200/300/';

    $scope.validateTitle = () => {
      if($scope.newMovieTitle.length > 0) {
        console.debug($scope.newMovieTitle);
      }
      else {
        window.alert('Title is required');
      }
    };

    $scope.addMovie = () => {
      let movie = {
        title: $scope.newMovieTitle,
        category: $scope.newMovieCategory,
        image: $scope.newMovieImage,
        description: $scope.newMovieDescription
      };

      $scope.movies.push(movie);
    };

    $scope.checkCategorySelected = () => {
      if($scope.newMovieCategory === '') {
        window.alert('Category cannot be empty.');
      }
    };

    $scope.checkDescription = () => {
      console.debug($scope.newMovieDescription);
    };
  });
