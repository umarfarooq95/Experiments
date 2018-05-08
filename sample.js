/*
var app = angular.module('app', []);
app.controller('modalController', function ($scope) {
    $scope.myName = "umar";
    $scope.dir = "";
});


app.directive("model", function () {
    return {
        restrict: "A",
        link: function (scope, element, attr) {
            var elementText = element.val(scope[attr.model]);
            element.on('keydown', function (e) {
                scope[attr.model] = e.target.value;
            });
            scope.$watch(scope[attr.model], function (value) {
                 element.val(value);

            })


        }
    }
});



var someObj = {
    customer:{
        account:100
    },
    age:34,
    addresses:[
        'chennai','madurai'
    ]
}



function extract(context,propertyPath){

    var propItems = propertyPath.split(".");

    var activeContext = null;
    for(var i=0;i<propItems.length;i++){

        if(!activeContext){
            activeContext = context[propItems[i]];
            continue;
        }

        var currentContext = activeContext[propItems[i]];
        activeContex =   currentContext;
        if(activeContex==[]){
            currentContext = context[propItems[i]];

        }

    }

}


console.log(extract(someObj,'age')); // should print 34
console.log(extract(someObj,'customer.account')); // should print 100
console.log(extract(someObj,'addresses[1]')); // should print madurai
*/


function add(a,b,callback) {
    let result = a+b
    callback(result,3)
}

add(1,2,function(result,c){
    let resultData = result+c
     return resultData;
})









