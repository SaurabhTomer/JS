let randomNumber = Math.floor(Math.random() * 100) + 1;

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessesSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi'); // fixed typo (was loworHi)
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuesses = [];
let numGuess = 0;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('❌ Please enter a valid number!');
    } else if (guess < 1) {
        alert('⚠️ Enter a number greater than or equal to 1.');
    } else if (guess > 100) {
        alert('⚠️ Enter a number less than or equal to 100.');
    } else {
        prevGuesses.push(guess);
        if (numGuess === 4) {
            displayGuess(guess);
            displayMessage(`😢 Game Over! The number was ${randomNumber}`, 'error');
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage('🎉 Correct! You guessed it!', 'success');
        endGame();
    } else if (guess < randomNumber) {
        displayMessage('⬆️ Too Low! Try again.', 'info');
    } else {
        displayMessage('⬇️ Too High! Try again.', 'info');
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessesSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.textContent = `${5 - numGuess}`;
}

function displayMessage(message, type) {
    lowOrHi.textContent = message;
    lowOrHi.className = `lowOrHi ${type}`;
}

function newGame() {
    const newGameBtn = document.querySelector('#newGame');
    newGameBtn.addEventListener('click', function () {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        prevGuesses = [];
        numGuess = 0;
        guessesSlot.textContent = '';
        remaining.textContent = '5';
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
        lowOrHi.textContent = '';
    });
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">🔄 Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
