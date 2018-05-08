const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");
const submitButton = document.getElementById("submit");

const myQuestions = [
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

    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {

        const answers = [];

        for (letter in currentQuestion.answers) {

            answers.push(
                `<label>    
                   <input type="radio" name="question${questionNumber}" value="${letter}">
                   ${letter} :
                   ${currentQuestion.answers[letter]}
                 </label>`
            )
        }

        output.push(
            `<div class="question">${currentQuestion.question}</div>
             <div class="answers">${answers.join(" ")}</div>`
        )

    });

    quizContainer.innerHTML = output.join(" ");

}

function showResult() {

    const answerContainers = document.querySelectorAll('.answers');
    let num = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {

        const answerContainer = answerContainers[questionNumber];
        const selector = 'input[name = question' + questionNumber + ']:checked';
        const userValue = (answerContainer.querySelector(selector) || {}).value;

        if (userValue == currentQuestion.correctAnswer) {
            num++;
            answerContainer.style.color = 'green';
        }
        else {
            answerContainer.style.color = 'red';
        }


    });

    resultContainer.innerHTML = num + " out of " + myQuestions.length;

}

buildquiz();

submitButton.addEventListener('click', showResult);

function sum(x,y) {
    function recursion (a,b) {
        if (b>0){
            return recursion (a +1 ,b-1)
        }
        else {
            return a
        }
    }
    return recursion (x,y)
}
console.log(sum(1,10))