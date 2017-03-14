(function() {
	'use strict';

	angular.module('app')
		.service('DataService', function ($http) {
			const baseUrl = 'http://localhost:5000';

			this.getRecipes = function (callback) {
				$http.get(`${baseUrl}/api/recipes`)
					.then(successResponse => {
						callback(null, successResponse.data);
					}, errorResponse => {
						callback(errorResponse.data, null);
					});
			};

			this.getCategories = function (callback) {
				$http.get(`${baseUrl}/api/categories`)
					.then(successResponse => {
						callback(null, successResponse.data);
					}, errorResponse => {
						callback(errorResponse.data, null);
					});
			};

			this.getFoodItems = function (callback) {
				$http.get(`${baseUrl}/api/fooditems `)
					.then(successResponse => {
						callback(null, successResponse.data);
					}, errorResponse => {
						callback(errorResponse.data, null);
					});
			};

			this.getRecipesForCategory = function (category, callback) {
				$http.get(`${baseUrl}/api/recipes?category=${category}`)
					.then(successResponse => {
						callback(null, successResponse.data);
					}, errorResponse => {
						callback(errorResponse.data, null);
					});
			};

			this.getRecipe = function (id, callback) {
				$http.get(`${baseUrl}/api/recipes/${id}`)
					.then(successResponse => {
						callback(null, successResponse.data);
					}, errorResponse => {
						callback(errorResponse.data, null);
					});
			};

			this.addRecipe = function (recipeData, callback) {
				$http.post(`${baseUrl}/api/recipes`, recipeData)
					.then(successResponse => {
						callback(null, successResponse.data);
					}, errorResponse => {
						callback(errorResponse.data, null);
					});
			};

			this.updateRecipe = function (id, recipeData, callback) {
				$http.put(`${baseUrl}/api/recipes/${id}`, recipeData)
					.then(successResponse => {
						callback(null, successResponse.data);
					}, errorResponse => {
						callback(errorResponse.data, null);
					});
			};

			this.removeRecipe = function (id, callback) {
				$http.delete(`${baseUrl}/api/recipes/${id}`)
					.then(successResponse => {
						callback(null, successResponse.data);
					}, errorResponse => {
						callback(errorResponse.data, null);
					});
			};
		});
})();
