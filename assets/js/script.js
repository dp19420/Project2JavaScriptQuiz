const query = document.getElementById("query");
const answers = Array.from(document.getElementsByClassName("answer-text"));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Who is thought to be the first emperor in history?",
        answer1: "Qin Shi Huang",
        answer2: "Gaius Julius Caesar Augustus",
        answer3: "Sargon of Akkad",
        answer4: "Cyrus the Great",
        correct: 3
    },
    {
        question: "By what name have the city of Istanbul NOT been known?",
        answer1: "Mikligarðr",
        answer2: "Halicarnassus",
        answer3: "Byzantium",
        answer4: "Lygos",
        correct: 2
    },
    {
        question: "When did the great Jewish Revolt start?",
        answer1: "66 CE",
        answer2: "1632 CE",
        answer3: "403 BCE",
        answer4: "237 CE",
        correct: 1
    },
    {
        question: "What year was the Battle of Thermopylae",
        answer1: "550 BC",
        answer2: "480 BC",
        answer3: "310 BC",
        answer4: "Fictonal",
        correct: 2
    },

];
//CONSTANTS

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 4;

function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getFirstQuestion();
};
function getFirstQuestion() {
    questionCounter = 0;
    currentQuestion = availableQuestions[questionCounter];
    query.innerText = currentQuestion.question;
    answers[0].innerText = currentQuestion.answer1;
    answers[1].innerText = currentQuestion.answer2;
    answers[2].innerText = currentQuestion.answer3;
    answers[3].innerText = currentQuestion.answer4;
    acceptingAnswers = true;

};
function getNextQuestion() {
    questionCounter++;
    currentQuestion = availableQuestions[questionCounter];
    query.innerText = currentQuestion.question;
    answers[0].innerText = currentQuestion.answer1;
    answers[1].innerText = currentQuestion.answer2;
    answers[2].innerText = currentQuestion.answer3;
    answers[3].innerText = currentQuestion.answer4;
    acceptingAnswers = true;

};
startGame();
