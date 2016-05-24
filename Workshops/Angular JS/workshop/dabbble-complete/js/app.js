"use strict";

var app = angular.module('dabbble', [
    'dabbble.controllers',
    'dabbble.filters',
    'dabbble.directives',
    'dabbble.services'
]);

app.config(["$routeProvider", function ($routeProvider) {
  $routeProvider
    .when("/shots/:id", {controller: "ShotCtrl", templateUrl: "partials/shot.html"})
    .when("/:list", {controller: "ShotListCtrl", templateUrl: "partials/shot_list.html"})
    .otherwise({redirectTo: "/popular"})
}])
