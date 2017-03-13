(function() {
	'use strict';

	angular.module('app')
		.service('DataService', function ($http) {
			const baseUrl = 'http://localhost:5000';

			this.getRecipes = function (callback) {
				$http.get(`${baseUrl}/api/recipes`)
					.then(response => {
						callback(response.data);
					});
			};

			this.getCategories = function (callback) {
				$http.get(`${baseUrl}/api/categories`)
					.then(response => {
						callback(response.data);
					});
			};

			this.getFoodItems = function (callback) {
				$http.get(`${baseUrl}/api/fooditems `)
					.then(response => {
						callback(response.data);
					});
			};

			this.getRecipesForCategory = function (category, callback) {
				$http.get(`${baseUrl}/api/recipes?category=${category}`)
					.then(response => {
						callback(response.data);
					});
			};

			this.getRecipe = function (id, callback)  {
				$http.get(`${baseUrl}/api/recipes/{id}`)
					.then(response => {
						callback(response.data);
					});
			};

			this.addRecipe = function (recipeData, callback) {
				$http.post(`${baseUrl}/api/recipes`, recipeData)
					.then(response => {
						callback(response);
					});
			};

			this.updateRecipe = function (id, recipeData, callback) {
				$http.put(`${baseUrl}/api/recipes/${id}`, recipeData)
					.then(response => {
						callback(response.data);
					});
			};

			this.removeRecipe = function (id, callback) {
				$http.delete(`${baseUrl}/api/recipes/${id}`)
					.then(response => {
						callback(response.data);
					});
			};
		});
})();
