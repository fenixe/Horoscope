(function () {
    var app = angular.module('horoscope', ['ngRoute', 'ngCookies', 'LocalStorageModule', 'AppController', 'AuthService', 'LoginController', 'ContentController', 'NavController']);

    app.constant('COOKIE',{
        userID : 'userID'
    });

    app.constant('HOROSCOP',{
        yesterday : 'yesterday',
        tomorrow : 'tomorrow',
        today : 'today'
    });

    app.config( function( $httpProvider ) {    // [url]http://habrahabr.ru/post/181009/[/url]
        $httpProvider.defaults.headers.post[ 'Content-Type' ] = 'application/x-www-form-urlencoded;charset=utf-8';

    });

    app.config(['localStorageServiceProvider', function(localStorageServiceProvider){
        localStorageServiceProvider.setPrefix('horoscope');
    }]);

    app.service('userService', function () {
        this.userData = {};
        this.user = function () {
            return this.userData;
        };

        this.setEmail = function (email) {
            this.userData.email = email;
        };

        this.getEmail = function () {
            return this.userData.email;
        };

        this.setSetCount = function (setCount) {
            this.userData.yearSetCount = setCount;
        };

        this.getSetCount = function () {
            return this.userData.yearSetCount;
        };
    });



    app.config(function ($httpProvider) {
        $httpProvider.interceptors.push([
            '$injector',
            function ($injector) {
                return $injector.get('AuthInterceptor');
            }
        ]);
    });

    app.factory('AuthInterceptor', function ($rootScope, $q) {
        return {
            responseError: function (response) {
                if (response.status === 401) {

                }
                if (response.status === 403) {

                }
                if (response.status === 419 || response.status === 440) {

                }
                return $q.reject(response);
            }
        };
    });

    app.directive('formAutofillFix', function ($timeout) {
        return function (scope, element, attrs) {
            element.prop('method', 'post');
            if (attrs.ngSubmit) {
                $timeout(function () {
                    element
                        .unbind('submit')
                        .bind('submit', function (event) {
                            event.preventDefault();
                            element
                                .find('input, textarea, select')
                                .trigger('input')
                                .trigger('change')
                                .trigger('keydown');
                            scope.$apply(attrs.ngSubmit);
                        });
                });
            }
        };
    });


    /*
     app.directive('reviewForm', function () {
     return {
     restrict: 'E',
     templateUrl: 'review-form.html'
     };
     });


     app.controller('horoscopStore', ['$http', function ($http) {
     var store = this;
     store.products = [];
     $http.get('./products.json').success(function (data) {
     store.products = data;
     });
     }]);    */

// not use
    app.controller('ReviewController', function () {
        this.review = {};
        this.addReview = function (product) {
            //product.reviews.push(this.review);
            this.review = {};
        };
    });


// not use
    var gem = {
        name: 'vxcv',
        price: 2.55,
        canPurchase: true,
        soldOut: false
    };

    var gems = [
        {
            name: 'vxcv',
            price: 2.55,
            canPurchase: true,
            soldOut: true,
            description: 'dfgsdfgdfgdftct54'
        }, {
            name: 'vxsdfgfgsdfgcv',
            price: 255,
            canPurchase: true,
            soldOut: true,
            description: 'dfasdfdsc34245c'
        }
    ];
})();


