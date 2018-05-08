var courses = [
    {courseName: 'JavaScript', description: "Basic", courseId: 'c1'},
    {courseName: 'Jquery', description: "Intermediate", courseId: 'c2'}
];

function addCourse(course) {
    courses.push(course)
}

function removeCourse(courseId) {
    for (var i = 0; i < courses.length; i++) {
        var obj = courses[i];
        if (courseId.indexOf(obj.courseId) !== -1) {
            courses.splice(i, 1);
        }
    }
}


var professsors = [
    {professorId: 'p1', professorName: 'John', professorCourses: []},
    {professorId: 'p2', professorName: 'Watson', professorCourses: []}
];

function addProfessor(professor) {
    professsors.push(professor)
}

function removeProfessor(professorId) {
    for (var i = 0; i < professsors.length; i++) {
        var obj = professsors[i];

        if (professorId.indexOf(obj.professorId) !== -1) {
            professsors.splice(i, 1);
        }
    }
}

function findCourse(courseId) {
    return courses.filter(function (course) {
        return course.courseId == courseId
    })[0];
}
function findObj(arr) {
    for (var i = 0; i < arr.length; i++) {
        var obj = arr[i];
        return obj;
    }
}

function addProfessorWithCourses(professorId, courseId) {
    var foundCourse = findCourse(courseId);
    var iterateObj = findObj(professsors);
    if (professorId == iterateObj.professorId) {
        iterateObj.professorCourses.push(foundCourse)
    }


}

function removeProfessorWithCourses(professorId, courseId) {
    var foundCourse = findCourse(courseId);
    var iterateObj = findObj(professsors);
    if (professorId == iterateObj.professorId) {
        iterateObj.professorCourses.splice(foundCourse, 1)
    }

}

var students = [
    {studentId: 's1', studentName: "Peter", studentCourses: []},
    {studentId: 's2', studentName: "Jack", studentCourses: []}
];

function addStudent(student) {
    students.push(student)
}

function removeStudent(studentId) {
    for (var i = 0; i < students.length; i++) {
        var obj = students[i];
        if (studentId.indexOf(obj.studentId) !== -1) {
            students.splice(i, 1);
        }
    }
}

function addStudentWithCourses(studentId, courseId) {
    var foundCourse = findCourse(courseId);
    var iterateObj = findObj(students);
    if (studentId == iterateObj.studentId) {
        iterateObj.studentCourses.push(foundCourse)
    }

}

function removeStudentWithCourses(studentId, courseId) {
    var foundCourse = findCourse(courseId);
    var iterateObj = findObj(students);
    if (studentId == iterateObj.studentId) {
        iterateObj.studentCourses.splice(foundCourse, 1)
    }
}

var sampleInputStr = "hi my name is java";
function strCamelCaseToUpperCase(inputStr) {
    var outputStrArrays = [];
    var j = 0;
    while(j<inputStr.length){
         if(j==0){
             outputStrArrays.push(inputStr[j].toUpperCase());
             j++;
             continue;
         }
        if(inputStr[j] === ' ' ){
            if(inputStr[j+1]){
                outputStrArrays.push(" ");
                outputStrArrays.push(inputStr[j+1].toUpperCase());
            }
            j+=2;
            continue;
        }
        outputStrArrays.push(inputStr[j]);
        j++;
    }
    var outstr = outputStrArrays.join("");
    return outstr;
}
var outputResult = strCamelCaseToUpperCase(sampleInputStr);
//console.log(outputResult);

var person = {
    name : "Javascript",
    age : 28,
    father : {
        name : "c++",
        age : 35
    },
    mother : {
        name : "c",
        age : 40
    }
};

function findObjValues(inputObj) {
    var objValues = [];
    for (var k in inputObj){
        if(typeof (inputObj[k]) === 'object'){
            for (var q in inputObj[k]){
                if(typeof (inputObj[k][q] === 'object')){
                    objValues.push(inputObj[k][q]);
                }
            }
        }
        else{
            objValues.push(inputObj[k]);
        }
    }
    return objValues.join("\n");
}
//console.log(findObjValues(person));

function findObjValuesByAnotherMethod(inputObj) {
    var objKeyValues = [];
    for(var z in inputObj){
        if(typeof (inputObj[z])==='object'){
            var objIntoObj = inputObj[z];
            for (var o in objIntoObj){
                objKeyValues.push(objIntoObj[o]);
            }
        }
        else{
            objKeyValues.push(inputObj[z]);
        }
    }
    return objKeyValues.join("\n");
}
console.log(findObjValuesByAnotherMethod(person));


let newClass = new class{
    getWords(){
        console.log('hello')
    }
};
newClass.getWords();

let sym = Symbol('name');
let abc = 'name'[Symbol.iterator]();
console.log(abc.next())
console.log(abc.next())
console.log(abc.next())
console.log(abc.next())
console.log(abc.next())

