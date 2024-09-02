const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const highScoreTableBody = document.getElementById('highScoreTableBody');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

function saveHighScore(e) {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    updateHighScoreTable();
    username.value = '';
    saveScoreBtn.disabled = true;
}

function updateHighScoreTable() {
    highScoreTableBody.innerHTML = highScores
        .map((score, index) => {
            return `
            <tr>
                <td>${index + 1}</td>
                <td>${score.name}</td>
                <td>${score.score}</td>
            </tr>
            `;
        })
        .join('');
}


updateHighScoreTable();
