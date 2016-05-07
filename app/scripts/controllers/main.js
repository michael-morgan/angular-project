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

    $scope.movie = {
      title: '',
      image: 'http://lorempixel.com/200/300/',
      description: ''
    };

    $scope.validateTitle = () => {
      if($scope.movie.title.length > 0) {
        console.debug($scope.movie.title);
      }
      else {
        window.alert('Title is required');
      }
    };

    $scope.addMovie = () => {
      $scope.movies.push(angular.copy($scope.movie));
    };

    $scope.checkCategorySelected = () => {
      if($scope.movie.category === '') {
        window.alert('Category cannot be empty.');
      }
    };

    $scope.checkDescription = () => {
      console.debug($scope.movie.description);
    };
  });
