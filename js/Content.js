(function () {
    var app = angular.module('Content', []);

    app.directive('contentPanel', function () {
        return {
            restrict: 'E',
            templateUrl: 'content-panel.html'
        };
    });

    app.controller('ContentController', function(){
        this.content = {};

        this.loadContent = function(){
            console.log("fsdgf");
        };
    });


})();