var submitBtn = document.querySelector("submit");
var quizContainer = $('<div></div>');
var resultContainer = $('<div></div>');
$("body").append(quizContainer);

var myQuestions = [
    {
        question: "Who is the strongest?",
        answers: {
            a: "Superman",
            b: "The Terminator",
            c: "Waluigi, obviously"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the best site ever created?",
        answers: {
            a: "SitePoint",
            b: "Simple Steps Code",
            c: "Trick question; they're both the best"
        },
        correctAnswer: "c"
    },
    {
        question: "Where is Waldo really?",
        answers: {
            a: "Antarctica",
            b: "Exploring the Pacific Ocean",
            c: "Sitting in a tree",
            d: "Minding his own business, so stop asking"
        },
        correctAnswer: "d"
    }
];

function buildquiz() {

    var output = [];

    for (var k = 0; k < myQuestions.length; k++) {

        var question = $("<div></div>").attr('class', 'question');
        $("div.question").innerText =  myQuestions[k].question;
        quizContainer.append(question);

        for (letter in myQuestions[k].answers){
            var label = $('<label></label>');
            var inputEle = $('<input>');
            quizContainer.append(inputEle);
            inputEle.attr({type: "radio", name: "question"+k, value: letter});
            quizContainer.append(label);
            $("label").innerText = letter + ": " + myQuestions[k].answers[letter];
            inputEle.appendTo(label)
        }

        var answer = $("<div></div>").attr('class', 'answers');
        quizContainer.append(answer);
        $(".answers").innerHTML = quizContainer;

        output.push(question,answer);

    }
    $(quizContainer).innerHTML = output.join(" ")

}

function showResult() {

}
buildquiz();
submitBtn.onclick = showResult;
