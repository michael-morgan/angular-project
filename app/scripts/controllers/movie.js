'use strict';

/**
 * Created by michael on 07/05/16.
 */
angular.module('angularProjectApp')
  .controller('MovieCtrl', ['$scope', '$routeParams', 'Movies', function($scope, $routeParams, Movies) {
    console.debug($routeParams);
    var id = parseInt($routeParams.id, 10);

    Movies.get(id).then(function(movie) {
      $scope.movie = movie;
    });
  }]);
