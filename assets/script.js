
/*startBtn.addEventListener("click", function() {
    var timer = 15;
    var interval = setInterval(function () {
        document.getElementById('count').innerHTML = timer;
        timer--;
        if (timer === 0) {
            clearInterval(interval);
            document.getElementById('count').innerHTML = "You're out of time!";
        }
    }, 1000);
})*/

function currentQuestion() {
    questions [0].questionOne;
    var questionsDiv = document.getElementById('questions');
    questionsDiv.textContent = questions [0].questionOne;
    for (var i = 0; i < 4; i++) {
        var answerBtn = document.createElement("button");
        answerBtn.textContent = questions[0].answerChoices[i];
        questionsDiv.append(answerBtn);
    }
}

function rightAnswer () {
    
}

var score
var highScores

var questions = [{
    questionOne: "Whose world record did Michael Phelps not break at the 2008 Olympics when he won 8 gold medals?",
    answerChoices: ["Aaron Piersol", "Ian Crocker", "Ryan Lochte", "Caeleb Dressel"],
    correctAnswer: "Ian Crocker"
},

{
    question: "Who is the first swimmer to qualify for four Olympic games?",
        answerChoices: ["Dara Torres", "Katie Ledecky", "Janet Evans", "Jill Sterkel"],
            correctAnswer: "Jill Sterkel"
},

{
    questionOne: "Who beat Matt Biondi in the 1988 Olympics to end his chance of winning seven gold medals?",
        answerChoices: ["Tom Jaeger", "Rowdy Gaines", "Mark Spitz", "Anthony Nesty"],
            correctAnswer: "Anthony Nesty"
},

{
    questionOne: "How many Olympic Medals has Michael Phelps won?",
        answerChoices: ["23", "25", "28", "31"],
            correctAnswer: "28"
},

{
    questionOne: "Who is considered the greatest womens swimmer of all time?",
        answerChoices: ["Katie Ledecky", "Janet Evans", "Dara Torres", "Allison Schmitt"],
            correctAnswer: "so"
}]


console.log(questions[0]);
console.log(questions [0].questionOne);
currentQuestion();
