let startTime;

let time = new Date();
console.log({time})

function startTimer() {
    startTime = new Date()
    setInterval(updateTimer, 1); 
}

function updateTimer() {
    const currentTime = new Date()
    const milliseconds = {
        ISTtime: currentTime.toLocaleString(),
        ESTtime: currentTime.toLocaleString("en-US", {timeZone: "America/New_York"}), 
    }
    document.getElementById("ISTtime").textContent = "IST Time: " +  milliseconds.ISTtime; 
    document.getElementById("ESTtime").textContent = "EST Time: " +  milliseconds.ESTtime;  // Display milliseconds in the div
}



startTimer();




