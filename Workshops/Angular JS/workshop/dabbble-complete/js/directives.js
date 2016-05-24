'use strict';

var directives = angular.module('dabbble.directives', []);

directives.directive('shotList', function () {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: "partials/shot_list.html",
    scope: {
      shots: "=shotList"
    }
  }
});
