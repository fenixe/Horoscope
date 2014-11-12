(function () {
    var app = angular.module('AppController', []);

    app.controller('AppController', function ($scope, AuthService, userService, Data) {

        $scope.isAuthorized = AuthService.isAuthorized;
        $scope.isAuthenticated = AuthService.isAuthenticated;
        $scope.data = Data;
        console.log(Data);
        $scope.currentUser = $scope.data;
    });
})();


