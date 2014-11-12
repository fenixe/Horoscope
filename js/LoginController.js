(function () {
    var app = angular.module('LoginController', []);

    app.directive('loginForm', function () {
        return {
            restrict: 'E',
            templateUrl: 'login-form.html'
        };
    });

    app.controller('LoginController', function ($scope, $http, userService, $rootScope, AUTH_EVENTS, AuthService) {
        this.loginData = {
            email: 'ghjkhjk@dfgsdg.ru',
            date: '2014-11-02',
            isRemember : false
        };

        this.login = function (loginData) {
            AuthService.login(loginData).then(function () {
                $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                $rootScope.currentUser = loginData.email;
            }, function () {
                $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
            });
        };
    });

    app.constant('AUTH_EVENTS', {
        loginSuccess: 'auth-login-success',
        loginFailed: 'auth-login-failed',
        logoutSuccess: 'auth-logout-success',
        sessionTimeout: 'auth-session-timeout',
        notAuthenticated: 'auth-not-authenticated',
        notAuthorized: 'auth-not-authorized'
    });


})();