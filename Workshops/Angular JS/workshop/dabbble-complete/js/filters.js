'use strict';

var filters = angular.module('dabbble.filters', []);
filters.filter('dabbbleDate', function ($filter) {
  return function (datestr, format) {
    return $filter('date')(Date.parse(datestr) || datestr, format);
  }
});
