(function () {
	'use strict';

	angular.module('app')
		.controller('RecipeDetailController', function ($scope, $location, DataService) {
			let editing = false;

			if ($location.path().startsWith('/edit/')) {
				DataService.getRecipe($location.path().substr(6), recipe => {
					$scope.recipe = recipe;
					editing = true;
				});
			} else {
				$scope.recipe = {};
			}

			DataService.getCategories(categories => {
				$scope.categories = categories;
			});

			DataService.getFoodItems(data => {
				$scope.foodItems = data;
			});

			$scope.newIngredient = function () {
				if (!$scope.recipe.ingredients) {
					$scope.recipe.ingredients = [];
				}
				$scope.recipe.ingredients.push({});
			};

			$scope.deleteRecipeIngredient = function (index) {
				$scope.recipe.ingredients.splice(index, 1);
			};

			$scope.newStep = function () {
				if (!$scope.recipe.steps) {
					$scope.recipe.steps = [];
				}
				$scope.recipe.steps.push({});
			};

			$scope.deleteRecipeStep = function (index) {
				$scope.recipe.steps.splice(index, 1);
			};

			$scope.saveRecipe = function () {
				const recipe = $scope.recipe;

				function handleResponse(error) {
					if (error) {
						const errors = error.errors;
						$scope.errors = [];
						for (const field in errors) {
							if (Object.prototype.hasOwnProperty.call(errors, field)) {
								for (let i = 0; i < errors[field].length; i++) {
									$scope.errors.push(errors[field][i]);
								}
							}
						}
					} else {
						$location.path('/');
					}
				}

				if (editing) {
					DataService.updateRecipe(recipe._id, recipe, handleResponse);
				} else {
					DataService.addRecipe(recipe, handleResponse);
				}
			};

			$scope.cancel = function () {
				$location.path('/');
			};
		});
})();
