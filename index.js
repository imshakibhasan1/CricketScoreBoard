let scoreDisplay = document.getElementById("score-display") 
let overDisplay = document.getElementById("over-display")
let wicketDisplay = document.getElementById("wicket-display") 


// score count
let runCount = 0;
function runIncriment1() {
    runCount += 1;
    scoreDisplay.textContent = runCount
}
function runIncriment2() {
    runCount += 2 ;
    scoreDisplay.textContent = runCount
}
function runIncriment4() {
    runCount += 4 ;
    scoreDisplay.textContent = runCount
}
function runIncriment6() {
    runCount += 6 ;
    scoreDisplay.textContent = runCount
}

// Wicket Count
let wicket = 0;
function out(){
    wicket += 1;
    wicketDisplay.textContent = wicket;
}

// ball count 
let ballCount = 0.0;

function ballcount () {
    let newValue = parseFloat((ballCount + 0.1).toFixed(1));
    let decimals = parseFloat((newValue % 1)).toFixed(1);

    console.log("New value is : ", newValue);
    console.log("decimals value is : ", decimals);

    if (decimals == 0.7){
        ballCount = Math.ceil(newValue);

    } else{
        ballCount = newValue;
    }
    
    overDisplay.textContent = ballCount.toFixed(1)
}


function reset() {
    let userConfirmed = confirm("Are you sure you want to reset all score?");

    // If the user clicks "OK" (Yes), reset everything
    if (userConfirmed) {
        // 1. Reset JavaScript variables back to 0
        runCount = 0;
        wicket = 0;
        ballCount = 0.0;

        // 2. Update the HTML displays
        scoreDisplay.textContent = runCount;
        wicketDisplay.textContent = wicket;
        overDisplay.textContent = ballCount.toFixed(1);
        
        console.log("score has been reset.");
    } else {
        // If the user clicks "Cancel" (No), do nothing
        console.log("Reset canceled by user.");
    }
}
