function cb(message) {
    const messageElement = document.getElementById("message");
    messageElement.textContent = message;
    messageElement.style.display = "block"; // Show the message when the countdown is complete
}

function countdown(timer, callback) {
    const countdownDisplay = document.getElementById("countdown-display");

    if (timer > 0) {
        countdownDisplay.textContent = timer; // Update the displayed countdown value
        setTimeout(() => {
            countdown(timer - 1, callback); // Recursive call to countdown after 1 second
        }, 1000); // 1-second delay
    } else {
        callback("Countdown complete!"); // Trigger callback when countdown finishes
    }
}

// Start countdown from 5 when the page loads
window.onload = function() {
    countdown(10, cb);
};


// function secCountDown(callback) {
//     console.log("secCountDown started");
    
//     setTimeout(() => {
//       console.log(1);
//     }, 1000);
    
//     setTimeout(() => {
//       console.log(2);
//     }, 2000);
    
//     setTimeout(() => {
//       console.log(3);
//     }, 3000);
    
//     setTimeout(() => {
//       console.log(4);
//     }, 4000);
  
//     // Call the callback after all timeouts are done
//     setTimeout(() => {
//       callback("completed");
//     }, 4000);
//   }
  
//   // Define a callback function
//   function CountDown(message) {
//     console.log(message); // Will print "completed" after the countdown finishes
//   }
  
//   // Call secCountDown with the callback function
//   secCountDown(CountDown);
  
