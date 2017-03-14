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

			$scope.editRecipe = function (id) {
				$location.path(`/edit/${id}`);
			};

			$scope.deleteRecipe = function (id) {
				DataService.removeRecipe(id, () => {
					for (let i = 0; i < $scope.recipes.length; i++) {
						if ($scope.recipes[i]._id === id) {
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
