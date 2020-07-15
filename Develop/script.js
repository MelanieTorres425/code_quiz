let startBtn = document.querySelector("#startBtn");
let answerBtn = document.querySelector("#answerBtn");
let isCorrect = document.querySelector("#correct_wrong");
let displayForm = document.querySelector("#questionDiv");
let timerEl = document.querySelector("#countdown");

const quizQA = [
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: [
      "1. JavaScript",
      "2. Terminal/Bash",
      "3. For Loops",
      "4. console.log",
    ],
    answer: "2",
  },
  {
    question:
      "String values must be enclosed within ______ when being assigned to variables.",
    choices: ["1. Commas", "2 curly brackets", "3 quotes", "4 Parentheses"],
    answer: "3",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: [
      "1. JavaScript",
      "2. Terminal/Bash",
      "3. For Loops",
      "4. console.log",
    ],
    answer: "2",
  },
  {
    question:
      "String values must be enclosed within ______ when being assigned to variables.",
    choices: ["1. Commas", "2 curly brackets", "3 quotes", "4 Parentheses"],
    answer: "3",
  },
];
// WHEN I click the start button
function startGame() {
  timeStart(event);
}

// THEN a timer starts and I am presented with a question
function timeStart(event) {
  event.preventDefault();
  let timeLeft = 60;
  timerEl.textContent = timeLeft;
  let timeInterval = setInterval(() => {
    timerEl.textContent = timeLeft;
    timeLeft--;
    if (timeLeft < 0) {
      timerEl.textContent = "0";
      console.log("Game is Over!");
      clearInterval(timeInterval);
    }
  }, 1000);
}

startBtn.addEventListener("click", function () {
  startBtn.classList.add("hide");
  startGame();
});
