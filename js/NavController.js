(function () {
    var app = angular.module('NavController', []);

    app.directive('navPanel', function () {
        return {
            restrict: 'E',
            templateUrl: 'nav-panel.html',
            controller : function(){
                this.content = {};

                this.loadContent = function(){
                    console.log("fsdgf");
                };
            },
            controllerAs: 'navCtrl'
        };
    });
})();