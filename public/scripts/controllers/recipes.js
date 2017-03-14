(function () {
	'use strict';

	angular.module('app')
		.controller('RecipesController', function ($scope, DataService, $location) {
			$scope.selectedCategory = null;

			DataService.getRecipes(recipes => {
				$scope.recipes = recipes;
			});

			DataService.getCategories(categories => {
				$scope.categories = categories;
			});

			$scope.addRecipe = function () {
				$location.path('/add');
			};

			$scope.editRecipe = function (recipe) {
				$location.path(`/edit/${recipe._id}`);
			};

			$scope.deleteRecipe = function (recipe) {
				DataService.removeRecipe(recipe._id, () => {
					for (let i = 0; i < $scope.recipes.length; i++) {
						if ($scope.recipes[i]._id === recipe._id) {
							$scope.recipes.splice(i, 1);
						}
					}
				});
			};

			$scope.onCategoryChange = function () {
				// TODO
				console.log($scope.selectedCategory);
			};
		});
})();
