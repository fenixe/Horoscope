(function () {
    var app = angular.module('ContentController', []);

    app.service('ContentService', function ($http) {
        return {
            getHoroscope: function (sign, date) {
                return $http
                    .get('http://www.corsproxy.com/widgets.fabulously40.com/horoscope.json', {
                        params : {sign: sign, date : date}
                    })
                    .then(function (res) {
                        return res;
                    });
            }
        };
    });

    app.directive('contentPanel', function ( ContentService) {
        return {
            restrict: 'E',
            templateUrl: 'content-panel.html',
            controller: function ($scope) {
                this.tab = 2;
                this.setTab = function (numTab) {
                    this.tab = numTab;
                };
                this.isSet = function (checkTab) {
                    return this.tab === checkTab;
                };
                this.content = {};



                this.loadContent = function () {
                    console.log("fsdgf");
                };
            },
            controllerAs: 'contCtrl'
        };
    });
})();