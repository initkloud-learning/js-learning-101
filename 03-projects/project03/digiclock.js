const clockEl = document.querySelector("#clock"); //get the element with id "clock"

function updateClock() {
  //function to update the clock
  const date = new Date(); //get the current date and time
  clockEl.innerHTML = date.toLocaleTimeString(); //set the innerHTML of the clock element to the current time
}

setInterval(updateClock, 1000); //update every second
