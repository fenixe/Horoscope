(function () {
    var app = angular.module('LoginController', []);

    app.directive('loginForm', function () {
        return {
            restrict: 'E',
            templateUrl: 'login-form.html',
            controller: function ($rootScope,$filter, localStorageService, COOKIE,  AuthService, ContentService) {
                this.loginData = {
                    email: 'ghjkhjk@dfgsdg.ru',
                    date: '2014-11-03',
                    isRemember : false
                };
                this.login = function (loginData) {
                    AuthService.login(loginData).then(function (res) {
                        //$rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                        var userData = res.data['user'];
                        localStorageService.set(COOKIE.userID, userData);
                        $rootScope.currentUser = userData;

                        ContentService.getHoroscope('cancer', userData.date ).then(function(res){
                            console.log(res);
                        });
                    }, function () {
                        //$rootScope.$broadcast(AUTH_EVENTS.loginFailed);
                    });
                };
            },
            controllerAs: 'logCtrl'
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

    app.constant('COOKIE',{
        userID : 'userID'
    })


})();