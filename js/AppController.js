(function () {
    var app = angular.module('AppController', []);

    app.controller('AppController', function ($cookieStore,$scope, $rootScope, AuthService) {
        $scope.isAuthorized = AuthService.isAuthorized();
        $scope.logout = AuthService.logout;

        $rootScope.currentUser = null;
    });
})();


