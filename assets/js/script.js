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
    getNewQuestion();
    updateScoreAndProgress();
};
function getNewQuestion() {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('scoreboard.html');
    }

    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    query.innerText = currentQuestion.question;

    answers.forEach((answer, index) => {
        answer.innerText = currentQuestion["answer" + (index + 1)];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
    updateScoreAndProgress();
};

answers.forEach(answer => {
    answer.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedAnswer = e.target;
        const selectedChoice = selectedAnswer.dataset['number'];

        const classToApply = selectedChoice == currentQuestion.correct ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }

        selectedAnswer.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedAnswer.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

function incrementScore(num) {
    score += num;
    updateScoreAndProgress();
}

function updateScoreAndProgress() {
    scoreText.innerText = score;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
}

startGame();
