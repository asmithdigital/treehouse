'use strict';

var controllers = angular.module("dabbble.controllers", []);


controllers.controller("AppCtrl" , function ($scope){
	$scope.name = "World!!";
	$scope.updateName = function(){
		$scope.name = "World from function!";
	};
	 $scope.todos = [
	    {text:'Learn AngularJS', done:false},         
	    {text: 'Build an app', done:false}
	  ];
	  
	  $scope.getTotalTodos = function () {
	    return $scope.todos.length;
	  };
	  
	  
	  $scope.addTodo = function () {
	    $scope.todos.push({text:$scope.formTodoText, done:false});
	    $scope.formTodoText = '';
	  };
	  
	    $scope.clearCompleted = function () {
	        $scope.todos = _.filter($scope.todos, function(todo){
	            return !todo.done;
	        });
	    };
	    
});

controllers.controller("ShotsListCtrl", function ($scope, dribbble, $routeParams){
	
	var list = $routeParams.list;

	dribbble.list(list).then(function (data){
		$scope.list = data.data;	
		console.log(data);
		console.log($scope.list.page);
	});

	$scope.loadNextPage = function (){
		dribbble.list(list, {page: $scope.list.page + 1}).then(function (data){
			console.log(data);
			console.log($scope.list.page);
			$scope.list.page = data.data.page;
			$scope.list.shots = $scope.list.shots.concat(data.data.shots);
			console.log(data.data.shots);
		});
	};

});



controllers.controller("ShotsCtrl", function ($scope, dribbble, $routeParams){

	var id = $routeParams.id;

	dribbble.shot(id).then(function(data){
		$scope.shot = data.data;	
		console.log(data);
	});

});