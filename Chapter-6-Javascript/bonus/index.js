   // Define colors
   const colors = [
    {name: 'red', value: 'rgb(255, 0, 0)'},
    {name: 'green', value: 'rgb(0, 255, 0)'},
    {name: 'blue', value: 'rgb(0, 0, 255)'}
];

let targetColorIndex;
let lives = 3;
let score = 0;

// Function to generate a random color
function generateRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

// Function to initialize the game
function initGame() {
    targetColorIndex = Math.floor(Math.random() * colors.length);
    const targetColor = colors[targetColorIndex].value;
    document.getElementById('target-color').textContent = targetColor;

    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    colors.forEach((color, index) => {
        const option = document.createElement('div');
        option.classList.add('option');
        option.style.backgroundColor = color.value;
        option.addEventListener('click', () => checkGuess(index));
        optionsContainer.appendChild(option);
    });

    updateFeedback('');
}

// Function to check the user's guess
function checkGuess(guessIndex) {
    if (guessIndex === targetColorIndex) {
        updateFeedback('Correct!', 'green');
        score++;
    } else {
        updateFeedback('Incorrect! Try again.', 'red');
        lives--;
        if (lives === 0) {
            endGame();
            return;
        }
    }
    initGame();
}

// Function to update feedback
function updateFeedback(message, color) {
    const feedbackElement = document.getElementById('feedback');
    feedbackElement.textContent = message;
    feedbackElement.style.color = color || 'black';
}

// Function to end the game
function endGame() {
    const resetBtn = document.getElementById('reset-btn');
    resetBtn.style.display = 'block';
    resetBtn.addEventListener('click', () => {
        resetGame();
        resetBtn.style.display = 'none';
    });

    updateFeedback(`Game Over! Your final score is ${score}`, 'blue');
}

// Function to reset the game
function resetGame() {
    lives = 3;
    score = 0;
    initGame();
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', initGame);