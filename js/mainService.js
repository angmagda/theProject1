var app = angular.module('productIdGen');

app.service('mainService', function ($http) {
	this.getData = function() {
		return $http({
			method: 'GET',
			url: 'http://localhost:3000/generator'
		})

	},

	this.addProductId = function(product, $scope) {
		return $http({
			method: 'POST',
			url: '/products',
			data: {}
		}).then(function(newProductId){
			return newProductId.data
		});
		
}

	});