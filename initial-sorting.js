var nameList = [
    {
        "name": "A K Qwerty"
    }, {
        "name": "V K Cat"
    }, {
        "name": "O K Suresh"
    }, {
        "name": "B K Amrith"
    }, {
        "name": "C Suresh Nair"
    }, {
        "name": "P K Bala"
    }, {
        "name": "E K Emily"
    }, {
        "name": "D K Vai"
    }, {
        "name": "Q K Moha"
    }, {
        "name": "F K Suresh"
    }, {
        "name": "C A Kumar"
    }
];


function compare(a, b) {
    if (a.sortableName < b.sortableName)
        return -1;
    if (a.sortableName > b.sortableName)
        return 1;
    return 0;
}
















var q = nameList.map(function (nameobj) {
    nameobj.sortableName = nameSort(nameobj.name)
    return nameobj

});
function nameSort (studentName){
    var nameAry = studentName.split(' ');
    var  initailName=[];
    var words=[];
    nameAry.forEach(function (name) {
        if(name.length==1){
            initailName.push(name)
        }else if(name.length > 1){
            words.push(name)
        }
    });
    var  name =  words.concat(initailName)

    return name.join(' ')
};

console.log(q.sort(compare));

