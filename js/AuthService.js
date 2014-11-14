(function () {
    var app = angular.module('AuthService', []);


    app.service('AuthService', function ($http, $cookies, localStorageService, userService, COOKIE) {
        return {
            login: function (loginData) {
                return $http
                    .post('./login/login.json', loginData)
                    .then(function (res) {
                        return res;
                    });
            },
            logout: function () {
                localStorageService.clearAll();
            },
            isAuthorized: function () {
                return !!localStorageService.get(COOKIE.userID);
            }
        };
    });


      // not use
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
