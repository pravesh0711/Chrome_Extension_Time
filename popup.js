console.log("Hello extention!!")
let startTime;

let time = new Date();
console.log({time})

function startTimer() {
    // startTime = Date.now();
    startTime = new Date()

    setInterval(updateTimer, 1); 
    // updateTimer();

}

function updateTimer() {
    // const currentTime = Date.now();
    const currentTime = new Date()
    const milliseconds = currentTime
    document.getElementById("item1").textContent = milliseconds; // Display milliseconds in the div
}

startTimer();