(function () {
    var app = angular.module('AppController', []);

    app.controller('AppController', function (localStorageService,$scope, $rootScope, AuthService, COOKIE) {
        $scope.isAuthorized = AuthService.isAuthorized;
        $scope.logout = AuthService.logout;
        $rootScope.currentUser = (($scope.isAuthorized())? localStorageService.get(COOKIE.userID) : null);
    });
})();


