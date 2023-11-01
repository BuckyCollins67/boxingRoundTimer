// document.addEventListener('DOMContentLoaded')



// function setUpTimer(currentRound, roundTime, restTime) {
    
// }

function startTimer() {
    const roundTime = document.getElementById('roundTime').value * 60; // in seconds
    const restTime = document.getElementById('restTime').value * 60; // in seconds
    const numRounds = document.getElementById('numRounds').value;

    let currentRound = 1;
    let isResting = false;
    let remainingTime = roundTime; // start with the round time

    const timerInterval = setInterval(() => {
        if (remainingTime > 0) {
            remainingTime--; // decrement the timer
        } else if (currentRound < numRounds) {
            isResting = !isResting; // toggle between resting and active
            remainingTime = isResting ? restTime : roundTime; // set the next timer
            if (!isResting) currentRound++; // increment the round if not resting
        } else {
            clearInterval(timerInterval); // end the timer
        }
        console.log(`The round time is ${roundTime}.  The rest time is ${restTime}.  The number of rounds is ${numRounds}.`)
        document.getElementById('timer').textContent = formatTime(remainingTime)
        // Update the display here (e.g., remaining time, current round, etc.)
    }, 1000); // update every second
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
    
}