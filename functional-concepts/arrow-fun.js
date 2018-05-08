const fendrick = {
    name: "John",
    canRead: false,
    canWrite: false
};

const schools = [
    'washington & Lee',
    'YarkTown',
    'Town'
];

/*const self = person => ({...person,canRead : true,canWrite:true});
 console.log(self(fendrick));
 console.log(fendrick);*/

const cutSchool = (list, cut) => (list.filter(oneList => oneList != cut));
console.log(cutSchool(schools, 'Town'));

const highSchool = lists => lists.map(list => `${list}` + ' High School');
console.log(highSchool(schools));

let schoolsName = [
    {name: "Yorktown"},
    {name: "Stratford"},
    {name: "Washington & Lee"},
    {name: "Wakefield"}
];

let schoolObj = {
    "Yorktown": 10,
    "Washington & Lee": 2,
    "Wakefield": 5
};

/*const schoolArr = Object.keys(schoolObj).map(key => ({ name : key,wins:schoolObj[key]}));
 console.log(schoolArr);*/

const editName = (oldName, name, arr) => {
    arr.map(item => (item.name == oldName) ? ({...item, name}) : item)
};

let edited = editName("Stratford", "Dc", schoolsName);
console.log(edited);
console.log(schoolsName[1]);

let ages = [4, 7, 8, 9, 4, 3];

const maxAges = ages.reduce((max, value)=>(value > max) ? value : max, 0);
console.log('MAXAGE :' + maxAges);

const colors = [
    {
        id: '-xekare',
        title: "rad red",
        rating: 3
    },
    {
        id: '-jbwsof',
        title: "big blue",
        rating: 2
    },
    {
        id: '-prigbj',
        title: "grizzly grey",
        rating: 5
    },
    {
        id: '-ryhbhsl',
        title: "banana",
        rating: 1
    }
];

const colorsObj = colors.reduce((hash, {id, title, rating})=> {
    hash[id] = {title, rating};
    return hash
}, {});
console.log(colorsObj);

const colorList = ["red", "red", "green", "blue", "green"];

console.log([...colorList, 'color']);
console.log(colorList);

const distinctColor = colorList.reduce((distinct, color) => distinct.indexOf(color) !== -1 ? distinct : [...distinct, color], []);
console.log(distinctColor);

//Higher Order Functions
const invokeIf = (condition,FnTrue,FnFalse) => (condition) ? FnTrue() :FnFalse();
const FnTrue = () => console.log("Welcome");
const FnFalse = () => console.log("Unauthorised");
console.log(invokeIf(true,FnTrue,FnFalse));
console.log(invokeIf(false,FnTrue,FnFalse));

//Recursion
const countDown = (value) => {
    return (value > 0) ? countDown(value-1) : value
};
console.log(countDown(10));

//Composition

const clockTime = "hh:mm:ss:tt";
const clock = clockTime.replace("hh","03")
    .replace("mm","30")
    .replace("ss","55")
    .replace("tt","PM");
console.log(clock);