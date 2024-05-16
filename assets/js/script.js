const query = document.getElementById("query");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");

let question = {};
let chosen = true;
let total = 0;
let thisQuestion = 0;
let questionsLeft = [];

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
const correctPoints = 1;

function startQuiz() {
    total = 0;
    thisQuestion = 0;
    questionsLeft = [...questions];
    getNextQuestion();
}
function getNextQuestion() {
    thisQuestion++;
    const questionList = Math.floor(Math.random() * questionsLeft.lenght);
    question = questionsLeft[questionList];
    query.innerText = question;

}
startQuiz()