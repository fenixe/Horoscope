(function () {
    var app = angular.module('AuthService', []);

    app.service('AuthService', function ($http, Session ) {
        return {
            login: function (loginData) {
                return $http
                    .post('./login/login.json', loginData)
                    .then(function (res) {
                        var userData = res.data.user;
                        Session.create(userData.ID, userData.userID);
                    });
            },
            isAuthenticated :  function () {
                return !!Session.userId;
            },
            isAuthorized: function (authorizedRoles) {
                if (!angular.isArray(authorizedRoles)) {
                    authorizedRoles = [authorizedRoles];
                }
                return (this.isAuthenticated() &&
                authorizedRoles.indexOf(Session.userID) !== -1);
            }
        };
    });

    app.service('Session', function () {
        this.create = function (sessionId, userId) {
            this.id = sessionId;
            this.userId = userId;
        };
        this.destroy = function () {
            this.id = null;
            this.userId = null;
        };
        return this;
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
