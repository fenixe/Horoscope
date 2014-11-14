(function () {
    var app = angular.module('LoginController', []);

    app.directive('loginForm', function () {
        return {
            restrict: 'E',
            templateUrl: 'login-form.html',
            controller: function ($rootScope, $scope, localStorageService, COOKIE, HOROSCOP,  AuthService, ContentService) {
                $scope.loginData = {
                    email: 'ghjkhjk@dfgsdg.ru',
                    date: '2014-12-27'
                };
                this.login = function (loginData) {
                    AuthService.login(loginData).then(function (res) {
                        var userData = res.data['user'];

                        $rootScope.currentUser = userData;
                        $rootScope.currentUser.zodiac = ContentService.getZodiac($scope.currentUser.date) ;
                        localStorageService.set(COOKIE.userID, $rootScope.currentUser);

                        ContentService.getHoroscope($rootScope.currentUser.zodiac,HOROSCOP);
                    }, function () {
                    });
                };
            },
            controllerAs: 'logCtrl'
        };
    });


})();