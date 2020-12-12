// Buttons
const p1Btn = document.querySelector(".player-1-btn");
const p2Btn = document.querySelector(".player-2-btn");
const resetBtn = document.querySelector(".reset");

// Update Score with click
let p1Score = 0;
let p2Score = 0;

// WinningScore
let winningSore = 3;

//Set game over or not
let isGameOver = false;

//Display Score
const p1Display = document.querySelector(".player-1-score");
const p2Display = document.querySelector(".player-2-score");

// Select
const selectWinningScore = document.querySelector("#select");

//Reset

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = "0";
    p2Display.textContent = "0";
    p1Display.classList.remove("winner", "loser");
    p2Display.classList.remove("winner", "loser");
}


// Add Event listeners
p1Btn.addEventListener("click", function () {
    if (!isGameOver) {
        p1Score += 1;

        if (p1Score === winningSore) {
            isGameOver = true;
            p1Display.classList.add("winner");
            p2Display.classList.add("loser");
        }
        p1Display.textContent = p1Score;
    }
})

p2Btn.addEventListener("click", function () {

    if (!isGameOver) {
        p2Score += 1;

        if (p2Score === winningSore) {
            isGameOver = true;
            p2Display.classList.add("winner");
            p1Display.classList.add("loser");
        }
        p2Display.textContent = p2Score;
    }

    // if(p2Score != winningSore){
    //     p2Score += 1;
    //     p2Display.textContent = p2Score;

    // }

});

resetBtn.addEventListener("click", reset);

selectWinningScore.addEventListener("change", function (e) {

    winningSore = parseInt(e.target.value);
    reset();

});

