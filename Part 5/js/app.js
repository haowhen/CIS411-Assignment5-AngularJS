(function () {
    var app = angular.module('gemStore', ['store-directives']);

    app.controller('StoreController', ['$http',
        function ($http) {
            var store = this;
            store.products = [];

            $http.get('products.json').success(function (data) {
                store.products = data;
            });
  }]);

    app.controller("ReviewController", ['$http',
        function ($http) {
            var review = this;

            $http.get('products.json').success(function (data) {
                review.products = data;
            });

            this.addReview = function (product) {
                product.review.push(this.review);
                this.review = {};
            };
 }]);
})();