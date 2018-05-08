var app = angular.module('tableApp', []);

app.controller('tableCtrl', function ($scope) {
    $scope.fullname = "hjskdhjb"


    $scope.tableList = [
        {
        name: "umar",
        age: 21,
        sex: "male",
        salary: 5000
    },
        {
            name: "ithghjbhj",
            age: 21,
            sex: "male",
            salary: 10000
        },
        {
            name: "umar",
            age: 21,
            sex: "male",
            salary: 5000
        },
        {
            name: "umar",
            age: 21,
            sex: "male",
            salary: 10000
        },
        {
            name: "umar",
            age: 21,
            sex: "male",
            salary: 5000
        },
        {
            name: "umar",
            age: 21,
            sex: "male",
            salary: 10000
        },
        {
            name: "umar",
            age: 21,
            sex: "male",
            salary: 5000
        },
        {
            name: "umar",
            age: 21,
            sex: "male",
            salary: 10000
        },
        {
            name: "umar",
            age: 21,
            sex: "male",
            salary: 5000
        },
        {
            name: "umar",
            age: 21,
            sex: "male",
            salary: 10000
        },
        {
            name: "umar",
            age: 21,
            sex: "male",
            salary: 5000
        },
        {
            name: "umar",
            age: 21,
            sex: "female",
            salary: 10000
        },
        {
            name: "umar",
            age: 21,
            sex: "male",
            salary: 10000
        },
        {
            name: "umar",
            age: 21,
            sex: "female",
            salary: 10000
        },
        {
            name: "umar",
            age: 21,
            sex: "male",
            salary: 10000
        },
        {
            name: "umar",
            age: 21,
            sex: "male",
            salary: 10000
        },
        {
            name: "umar",
            age: 21,
            sex: "male",
            salary: 10000
        },
        {
            name: "umar",
            age: 21,
            sex: "male",
            salary: 10000
        }


    ];

    $scope.onClickFun = function (table) {
        table.name =  $scope.name
    }

});
