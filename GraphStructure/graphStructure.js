/**
 * Created by Umar on 1/15/2018.
 */

/*
 * 25 cities
 */

var cities = [];
var connectedCities = {};

Array.prototype.unique = function () {
    var arr = [];
    for (var i = 0; i < this.length; i++) {
        if (!arr.includes(this[i])) {
            arr.push(this[i]);
        }
    }
    return arr;
}

function addCity(cityName) {
    cities.push(cityName);
    connectedCities[cityName] = []
}

function addCityLink(city1, city2) {
    connectedCities[city1].push(city2);
}

/*for (var k = 0; k < 26; k++) {
 var cityName = (k + 10).toString(36);
 addCity(cityName)
 }*/

function getCityPath(cityName) {
    var value = connectedCities[cityName];
    return value ? value : 'No City Found'
}

function getConnectedCities(resultArr, currentEle, source, des, previous) {
    var currentArr = connectedCities[currentEle];

    for (var l = 0; l < currentArr.length; l++) {
        if (currentArr[l] == des) {
            if (previous) {
                resultArr.push(source + "->" + previous + "->" + currentEle + "->" + des);
                continue;
            }
            resultArr.push(source + "->" + currentEle + "->" + des);
            continue;
        }
        if (!connectedCities[currentArr[l]]) {
            continue;
        }
        else {
            var previous = currentEle
            getConnectedCities(resultArr, currentArr[l], source, des, previous)
        }
    }
}

function getLinkedCityPath(source, des, resultArr) {
    if (!resultArr) {
        var resultArr = [];
    }
    var previous
    var currentEle = connectedCities[source];

    if (!currentEle) {
        return resultArr.join(',')
    }

    for (var k = 0; k < currentEle.length; k++) {
        previous = currentEle[k]
        if (currentEle[k] == des) {
            resultArr.push(source + "->" + des);
            continue;
        }
        if (!connectedCities[currentEle[k]]) {
            continue;
        }
        else {

            getConnectedCities(resultArr, currentEle[k], source, des)
        }
    }
    return getLinkedCityPath(previous, des, resultArr)

}

addCity('a');
addCity('c');
addCity('f');
addCityLink('a', 'm');
addCityLink('a', 'c');
addCityLink('a', 'b');
addCityLink('c', 'd');
addCityLink('c', 'e');
addCityLink('c', 'm');
addCityLink('c', 'f');
addCityLink('f', 'm');


console.log(connectedCities);
//console.log(getCityPath('a'));
console.log(getLinkedCityPath('a', 'c '));


function getPath(src, des) {
    var resultObj = {};
    var previous;
    var previousEleList = [];
    var isNextIteration = 0;

    function getPathOfRoute(src, des) {
        var currentArr = connectedCities[src];
        previousEleList.push(src)
        if (!currentArr) {
            return route(resultObj,previousEleList)
        }
        for (var q = 0; q < currentArr.length; q++) {
            previous = currentArr[q];
            if (currentArr[q] == des) {

                resultObj[isNextIteration] = [src]

                // resultObj.push(getCurrentEleList(previousEleList) + "->" + des);
            }
            if (!connectedCities[currentArr[q]]) {
                continue;
            }
            else {
                ++isNextIteration
                getPathOfRoute(previous, des)
            }
        }
        return getPathOfRoute(previous, des)
    }

    return getPathOfRoute(src, des)
}

function route(resultObj,previousEleList) {
    var current = 0

    var size = Object.keys(resultObj).length;
    if (size == 1) {
        return resultObj
    }
    for (var key in  resultObj) {

        if (key !== '0') {
            var firstArr = resultObj[current];
            firstArr.forEach(function (ele, index) {
                resultObj[key].push(ele)
            })
            resultObj[key] = resultObj[key].unique();
            resultObj[key] = resultObj[key].reverse();
            ++current;
        }

        /*resultObj[key] =   resultObj[key].map(function(ele,index){
            if((ele == previousEleList[0]) && (key == 0)){
                ele = ele + "->" + previousEleList[previousEleList.length-1]
                return ele
            }

            if(key != 0){
                ele = previousEleList[0] + "->" + ele + previousEleList[previousEleList.length-1]
                return ele
            }
        })*/

    }
    return resultObj
}

console.log(getPath('a', 'b'));

