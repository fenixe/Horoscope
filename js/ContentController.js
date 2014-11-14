(function () {
    var app = angular.module('ContentController', []);

    app.filter('capitalize', function () {
        return function (input) {
            return (!!input) ? input.replace(/([^\W_]+[^\s-]*) */g, function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }) : '';
        }
    });

    app.service('ContentService', function ($http, $filter, localStorageService) {
        return {
            getHoroscope: function (zodiac, date) {
                for (var key in date) {
                    $http({
                        method: 'POST',
                        url: './content/parse-content.php',
                        data: {zodiac: zodiac, date: date[key]},
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    }).success(function (res) {
                        localStorageService.set(res.date, res);
                    })
                }
            },
            getZodiac: function (date) {
                var zodiacs = {
                    0: {limit: 21, vals: ["aquarius", "capricorn"]},
                    1: {limit: 20, vals: ["pisces", "aquarius"]},
                    2: {limit: 21, vals: ["aries", "pisces"]},
                    3: {limit: 21, vals: ["taurus", "aries"]},
                    4: {limit: 21, vals: ["gemini", "taurus"]},
                    5: {limit: 21, vals: ["cancer", "gemini"]},
                    6: {limit: 22, vals: ["leo", "cancer"]},
                    7: {limit: 22, vals: ["virgo", "leo"]},
                    8: {limit: 22, vals: ["libra", "virgo"]},
                    9: {limit: 22, vals: ["scorpio", "libra"]},
                    10: {limit: 23, vals: ["sagittarius", "scorpio"]},
                    11: {limit: 22, vals: ["capricorn", "sagittarius"]}
                };
                var dt = new Date(date);
                var zodObj = zodiacs[dt.getMonth()];
                return dt.getDate() >= zodObj.limit ? zodObj.vals[0] : zodObj.vals[1];
            }
        };
    });

    app.directive('contentPanel', function (ContentService, localStorageService) {
        return {
            restrict: 'E',
            templateUrl: 'content-panel.html',
            controller: function ($scope) {
                this.tab = 'today';
                this.horoscope = '';
                this.zodiac = '';
                try{
                    this.horoscope = localStorageService.get(this.tab).horoscope;
                    this.zodiac = localStorageService.get(this.tab).zodiac;
                }catch (ex){}

                this.setTab = function (nameTab) {
                    this.horoscope = localStorageService.get(nameTab).horoscope;
                    this.tab = nameTab;
                };
                this.isSet = function (checkTab) {
                    return this.tab === checkTab;
                };
            },
            controllerAs: 'contCtrl'
        };
    });
})();