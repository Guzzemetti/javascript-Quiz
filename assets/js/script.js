// Html Hooks
var startButton = document.querySelector("#startButton");
var questionSection = document.querySelector("#questionsBox");
var questionsDiv = document.querySelector("#questionsDiv");
var quizResults = document.querySelector("#quizResults");
var timer = document.querySelector("#timer");
var questionHere = document.querySelector("#questionHere");
var choiceOne = document.querySelector(".choiceOne");
var choiceTwo = document.querySelector(".choiceTwo");
var choiceThree = document.querySelector(".choiceThree");
var choiceFour = document.querySelector(".choiceFour");

var currentQuestionIndex = 0


// An array for my questions, their choices and the answers
var questionsArr = [
    {
        question: "What does 'www' stand for in a website browser?",
        choices: ["World Wide Web", "Western World Websites", "Where Websites Wumbo", "What was what"],
        answer: "World Wide Web"
    },
    {
        question: "How long is an Olympic swimming pool (in meters)?",
        choices: ["30", "50", "60", "75"],
        answer: "50"
    },
    {
        question: "What geometric shape is generally used for stop signs?",
        choices: ["Hexagon", "Dodecahedron", "Octagon", "Trapezoid"],
        answer: "Octagon"
    },
    {
        question: "What is the name of the biggest technology company in South Korea?",
        choices: ["Verizon", "Samsung", "Kia", "Hyundai"],
        answer: "Samsung"
    },
    {
        question: "Demolition of the Berlin wall separating East and West Germany began in what year?",
        choices: ["1988", "1987", "1986", "1989"],
        answer: "1989"
    },
    {
        question: "What is the most consumed manufactured drink in the world?",
        choices: ["Tea", "Coca-Cola", "Mike's Hard Lemonade", "Wine"],
        answer: "Tea"
    }
];

// Sets the starting point for my timer by number of seconds
var timeRemaining = 60;

// TODO - Make a Timer that starts counting down once the start button is clicked
function startQuiz() {
    displayQuestions();
    timerStart();
    showButtons();
}

// Unhides my buttons
function showButtons(){
    choiceOne.removeAttribute("class");
    choiceTwo.removeAttribute("class"); 
    choiceThree.removeAttribute("class");
    choiceFour.removeAttribute("class");
}

// TODO - Make a function that grabs one question from the array to display at a time
// Assigns buttons a choice option from my overall questions array
function displayQuestions() { 
    var currentQuestion = questionsArr[currentQuestionIndex]
        // displays the current question
        questionHere.textContent = currentQuestion.question;
        // Assigns a choice to a button based on it's location in the array
        choiceOne.textContent = currentQuestion.choices[0];
        choiceTwo.textContent = currentQuestion.choices[1];
        choiceThree.textContent = currentQuestion.choices[2];
        choiceFour.textContent = currentQuestion.choices[3];
        // When one of these buttons are clicked, they initiate the verifyAnswer function below 
        choiceOne.onclick = verifyAnswer;
        choiceTwo.onclick = verifyAnswer;
        choiceThree.onclick = verifyAnswer;
        choiceFour.onclick = verifyAnswer;     
}

// Starts my timer from X seconds and has Game Over event if time runs out
function timerStart(){
    // Sets the number of seconds for my timer
    timer.textContent = timeRemaining + " seconds remaining.";
    setInterval(function () {
        timeRemaining--;
        // If time remaining is equal to or greater than 0, the remaining time will be displayed
        if (timeRemaining >= 0) {
            timer.textContent = timeRemaining + " seconds remaining.";
        }
        // If the time remaining is equal to 0, then it displays a game over notice and clears the time remaining interval
        if (timeRemaining === 0) {
            gameOver();
        }
    }, 1000);
}

// Verifies if the answer is correct for the displayed question
function verifyAnswer() {
    // If the question index reaches "6", then it hides the elements within the questions box and runs the gameOver function
    if (currentQuestionIndex >= 5){
        questionHere.innerHTML = "";
        choiceOne.setAttribute("class", "hide");
        choiceTwo.setAttribute("class", "hide");
        choiceThree.setAttribute("class", "hide");
        choiceFour.setAttribute("class", "hide");
        gameOver();
    }; 

    // TODO - Need a function to subtract time from timeRemaining for incorrect answers
    if (this.textContent !== questionsArr[currentQuestionIndex].answer) {
        console.log("incorrect");
        timeRemaining -=10;
    }
    if (this.textContent === questionsArr[currentQuestionIndex].answer) {
        console.log("Correct");
    };
    // Updates the question index to move to the next question, then initiates the display function to show the next question and choices
    currentQuestionIndex++;
    displayQuestions(questionsArr[currentQuestionIndex]);

  
};

// TODO - Need a GameOver display when total time runs out
// As of now, I have a Game-Over message that displays in the Timer Box once it reaches 0

function gameOver(){
    // Changes the text of my timer section to read Game Over
    timer.textContent = "Game Over";
    clearInterval(timeRemaining);
    // Selects the Start Button from the HTML and then changes text when timer hits 0
    let startButton = document.querySelector("#startButton");
    startButton.textContent = "Retry?"

}




// TODO - use localStorage to store/get wins/loses and track right questions "3/5 correct"
// TODO - Make a reset button for game stats
// TODO - Allow users to input their intials for a high score chart

// Event listener for my start button which initiates my timer
startButton.addEventListener("click", startQuiz);



// This is to test functions
// startButton.addEventListener("click", test);
// function test(){
//     
    
// }
