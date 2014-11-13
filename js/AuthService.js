(function () {
    var app = angular.module('AuthService', []);


    app.service('AuthService', function ($http, $cookies, $cookieStore,localStorageService, userService, COOKIE) {
        return {
            login: function (loginData) {
                return $http
                    .post('./login/login.json', loginData)
                    .then(function (res) {
                        return res;
                    });
            },
            logout: function () {
                localStorageService.remove(COOKIE.userID);
            },
            isAuthorized: function () {
                return !!localStorageService.get(COOKIE.userID);
            }
        };
    });


    app.service('Horoscope', function(){
        return {
            getZodiac : function(){
                var start = 1901, birthyear = document.zodiac.year.value, date=document.zodiac.date.value, month=document.zodiac.month.selectedIndex;
                with (document.zodiac.sign){

                    if (month == 1 && date >=20 || month == 2 && date <=18) {value = "Aquarius";}
                    if (month == 2 && date >=19 || month == 3 && date <=20) {value = "Pisces";}
                    if (month == 3 && date >=21 || month == 4 && date <=19) {value = "Aries";}
                    if (month == 4 && date >=20 || month == 5 && date <=20) {value = "Taurus";}
                    if (month == 5 && date >=21 || month == 6 && date <=21) {value = "Gemini";}
                    if (month == 6 && date >=22 || month == 7 && date <=22) {value = "Cancer";}
                    if (month == 7 && date >=23 || month == 8 && date <=22) {value = "Leo";}
                    if (month == 8 && date >=23 || month == 9 && date <=22) {value = "Virgo";}
                    if (month == 9 && date >=23 || month == 10 && date <=22) {value = "Libra";}
                    if (month == 10 && date >=23 || month == 11 && date <=21) {value = "Scorpio";}
                    if (month == 11 && date >=22 || month == 12 && date <=21) {value = "Sagittarius";}
                    if (month == 12 && date >=22 || month == 1 && date <=19) {value = "Capricorn";}
                }
                var x = (start - birthyear) % 12;

                with (document.zodiac.csign){
                    if (x == 1 || x == -11) {value = "Rat";}
                    if (x == 0) {value = "Ox";}
                    if (x == 11 || x == -1) {value = "Tiger";}
                    if (x == 10 || x == -2) {value = "Rabbit/Cat";}
                    if (x == 9 || x == -3)  {value = "Dragon";}
                    if (x == 8 || x == -4)  {value ="Snake";}
                    if (x == 7 || x == -5)  {value = "Horse";}
                    if (x == 6 || x == -6)  {value = "Sheep";}
                    if (x == 5 || x == -7)  {value = "Monkey";}
                    if (x == 4 || x == -8)  {value = "Cock/Phoenix";}
                    if (x == 3 || x == -9)  {value = "Dog";}
                    if (x == 2 || x == -10)  {value = "Boar";}
                }
            }
        }
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
