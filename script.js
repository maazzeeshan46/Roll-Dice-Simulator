//Getting all the Elements
let dice = document.getElementById("dice");
let rollbtn = document.getElementById("roll-btn");
let result = document.getElementById("result");
let history = document.getElementById("roll-history");
let remains = document.getElementById("remaining");

// We Used array of numbers to display
let dicefaces = ["\u2680", "\u2681", "\u2682", "\u2683", "\u2684", "\u2685"];
// array of rooll history
let rollhistory = [];

let rollCount = 0;
let maxcount = 10;
rollbtn.disabled = false;

rollbtn.addEventListener("click", function () {
  if (rollCount == maxcount) {
    rollbtn.disabled = true;
    alert("Maximum 10 counts allowed!");
    return;
  }
  rollCount++;

  remains.textContent = maxcount - rollCount;

  let rndmNum = Math.floor(Math.random() * 6);

  dice.classList.remove("roll-animation");
  void dice.offsetWidth;
  dice.classList.add("roll-animation");
  dice.textContent = dicefaces[rndmNum];

  let diceNum = rndmNum + 1;

  rollhistory.push(diceNum);
  history.innerHTML = "";
  rollhistory.forEach(function (number) {
    history.innerHTML += "<li>" + "Roll Number: " + number + "</li>";
  });
});
