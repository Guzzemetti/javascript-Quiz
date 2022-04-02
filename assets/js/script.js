var startButton = document.querySelector("#startButton");
var questionSection = document.querySelector("#questionsBox");
var questionArticle = document.querySelector("#questions-article");
var quizResults = document.querySelector("#quizResults");

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
        choices: ["Honda", "Samsung", "Kia", "Hyundai"],
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