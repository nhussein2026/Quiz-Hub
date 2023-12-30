// Sample leaderboard logic
function updateLeaderboard(scores) {
    const scoreList = document.getElementById('scoreList');
    scoreList.innerHTML = '';

    scores.forEach((score, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${score.name}: ${score.score}`;
        scoreList.appendChild(listItem);
    });
}

// Example usage: updateLeaderboard([{ name: 'Player1', score: 100 }, ...]);
