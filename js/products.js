(function () {
    var app = angular.module('store-products', []);

    app.directive('reviewForm', function () {
        return {
            restrict: 'E',
            templateUrl: 'review-form.html'
        };
    });

    app.directive('productPanel', function () {
        return {
            restrict: 'E',
            templateUrl: 'product-panel.html',
            controller: function () {
                this.tab = 1;
                this.selectTab = function (setTab) {
                    this.tab = setTab;
                };
                this.isSelected = function (checkTab) {
                    return this.tab === checkTab;
                }
            },
            controllerAs: 'panel'
        };
    });
})();