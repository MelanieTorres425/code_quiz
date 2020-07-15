let startBtn = document.querySelector("#startBtn");
let answerBtn document.querySelector("#answerBtn");
let isCorrect = document.querySelector("#correct_wrong");
let displayForm = document.querySelector("#questionDiv");

const quizQA = [
    {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["1. JavaScript", "2. Terminal/Bash", "3. For Loops", "4. console.log"],
    answer: "2"
    },
    {
    question: "String values must be enclosed within ______ when being assigned to variables.",
    choices: ["1. Commas", "2 curly brackets", "3 quotes" , "4 Parentheses"],
    answer: "3"
    },
    {
      question: "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["1. JavaScript", "2. Terminal/Bash", "3. For Loops", "4. console.log"],
      answer: "2"
      },
      {
      question: "String values must be enclosed within ______ when being assigned to variables.",
      choices: ["1. Commas", "2 curly brackets", "3 quotes" , "4 Parentheses"],
      answer: "3"
      },
]
// WHEN I click the start button
function startGame() {
    timeStarter(event);
    updateDisplay(quizQA);
  }

// THEN a timer starts and I am presented with a question
function timeStart(event) 

// THEN I am presented with another question

// WHEN I answer a question incorrectly

// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0

// THEN the game is over

// WHEN the game is over

// THEN I can save my initials and score
