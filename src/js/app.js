var app = angular.module('app', []);
app.controller('controller', function ($scope, $http, $q, $filter) {

    $scope.apps = [];
    $scope.work = [];

    $scope.init = function () {
        getData();
    }

    getData = () =>  {
        var file = 'data/apps.json';

        $http.get(file)
            .then(function(response) {
                $scope.apps = response.data.apps;
                $scope.work = response.data.work;
            });
    };

    $scope.openRepository = (app) => {
        window.open(app.code);
    }

    $scope.openSite = (app) => {
        window.open(app.site);
    }

    $scope.openAppSite = (app) => {
        window.open(app.appSite);
    }

    $scope.init();
});

app.filter('toDate', function() {
    return function(items) {
        return new Date(items);
    };
});
