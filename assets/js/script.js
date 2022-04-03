// Html Hooks
var startButton = document.querySelector("#startButton");
var questionSection = document.querySelector("#questionsBox");
var questionArticle = document.querySelector("#questions-article");
var quizResults = document.querySelector("#quizResults");
var timer = document.querySelector("#timer");
// JS Variables

// timeRemaining is the variable used in my timer (line 40 as of 4/2) to identify the nunmber of seconds remaining


// An array for my questions
var questions = [
    {   question: "What does 'www' stand for in a website browser?",
        choices: ["World Wide Web", "Western World Websites", "Where Websites Wumbo", "What was what"],
        answer: "World Wide Web"
    },
    {   question: "How long is an Olympic swimming pool (in meters)?",
        choices: ["30", "50", "60", "75"],
        answer: "50"
    },
    {   question: "What geometric shape is generally used for stop signs?",
        choices: ["Hexagon", "Dodecahedron", "Octagon", "Trapezoid"],
        answer: "Octagon"
    },
    {   question: "What is the name of the biggest technology company in South Korea?",
        choices: ["Verizon", "Samsung", "Kia", "Hyundai"],
        answer: "Samsung"
    },
    {   question: "Demolition of the Berlin wall separating East and West Germany began in what year?",
        choices: ["1988", "1987", "1986", "1989"],
        answer: "1989"
    },
    {   question: "What is the most consumed manufactured drink in the world?",
        choices: ["Tea", "Coca-Cola", "Mike's Hard Lemonade", "Wine"],
        answer: "Tea"
    }
];

// TODO - Make a Timer that starts counting down once the start button is clicked
function startQuiz() {
    // Sets the number of seconds for my timer
    var timeRemaining = 3;
     setInterval(function(){
        timeRemaining--;
        // If time remaining is equal to or greater than 0, the remaining time will be displayed
        if (timeRemaining >= 0){
        timer.textContent = timeRemaining + " seconds remaining.";
        }
        // If the time remaining is equal to 0, then it displays a game over notice and clears the time remaining interval
        if(timeRemaining === 0) {
            timer.textContent = "Game Over";
            clearInterval(timeRemaining);
            // Selects the Start Button from the HTML and then changes text when timer hits 0
            let startButton = document.querySelector("#startButton");
                startButton.textContent = "Retry?"
        }
    }, 1000);
}




// TODO - Make a function that grabs one question from the array to display at a time
// I need this function to display a question and it's potential answers when the start button is clicked
// This function should also accept input such as clicking on an answer or entering a choice number

function displayQuestions() {
        for (let i = 0; i < questions.length; i++) {
        var questions = questions[i];
        }
        questionArticle.innerHTML = questions;

};

// TODO - Need a function to subtract time from timeRemaining for incorrect answers
// TODO - Need a GameOver display when total time runs out
    // As of now, I have a Game-Over message that displays in the Timer Box once it reaches 0
// TODO - Need a Congrats display for when all questions have been answered correctly
// TODO - use localStorage to store/get wins/loses and track right questions "3/5 correct"
// TODO - Make a reset button for game stats
// TODO - Allow users to input their intials for a high score chart

// Event listener for my start button which initiates my timer
startButton.addEventListener("click", startQuiz, displayQuestions);