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

function convertTime() {
      const input = document.getElementById('istDateTime').value;
      if (!input) {
        document.getElementById('result').textContent = "Please enter a valid date and time.";
        return;
      }

      // Parse datetime input (yyyy-MM-ddTHH:mm)
      const istDate = new Date(input);

      // Adjust IST to EST (subtract 5h30m)
      const utcDate = new Date(istDate.getTime())

      // Convert to EST (New York time)
      const estString = utcDate.toLocaleString('en-US', {
        timeZone: 'America/New_York',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
      document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("convertBtn").addEventListener("click", convertTime);
      });
      document.getElementById('result').textContent = `EST Date & Time: ${estString}`;
    }



startTimer();




