'use strict';

/**
 * @ngdoc service
 * @name angularProjectApp.MoviesService
 * @description
 * # MoviesService
 * Service in the angularProjectApp.
 */
angular.module('angularProjectApp')
  .service('MoviesService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.a = 42;
  });
