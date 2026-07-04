// Start Game
function startGame() {
    localStorage.setItem("score", 0);
    window.location.href = "puzzle1.html";
}

// Check Answer
function checkAnswer(correctAnswer, nextPage) {

    const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    const result = document.getElementById("result");

    if (userAnswer === correctAnswer.toLowerCase()) {

        let score = Number(localStorage.getItem("score")) || 0;
        score += 25;
        localStorage.setItem("score", score);

        result.className = "correct";
        result.innerHTML = "✅ Correct! Moving to the next puzzle...";

        setTimeout(function () {
            window.location.href = nextPage;
        }, 1000);

    } else {

        result.className = "wrong";
        result.innerHTML = "❌ Incorrect! Please try again.";

    }
}

// Show Final Score
function showScore() {

    let score = Number(localStorage.getItem("score")) || 0;

    document.getElementById("score").innerHTML = score + " / 100";

    let message = document.getElementById("message");

    if (score === 100) {
        message.innerHTML = "🏆 Excellent! You solved all 4 puzzles!";
    } else if (score >= 75) {
        message.innerHTML = "🎉 Great job! You solved most of the puzzles.";
    } else if (score >= 50) {
        message.innerHTML = "😊 Good effort! Keep practicing.";
    } else {
        message.innerHTML = "💪 Better luck next time. Try again!";
    }
}

// Restart Game
function restartGame() {
    localStorage.setItem("score", 0);
    window.location.href = "index.html";
}
