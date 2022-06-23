var quizQuestions = [
    {
        title: "What is the name of the Ent that travels with Merry and Pip?",
        choices: ["Treebeard", "Treefriend", "EntKing"],
        answer: "Treebeard",
    },
    {
        title: "What is Gandalf called by the people of Gondor?",
        choices: ["Gandalf", "Mithrandir ", "White Wizard"],
        answer: "Mithrandir",
    },
    {
        title: "What does Bilbo say to the trolls to delay them eating the dwarves?",
        choices: ["We know a wizard", "Sunrise is coming", "Riddled with worms"],
        answer: "Riddled with worms",
    },
    {
        title: "What are all the dwarves names who hired Bilbo as a burglar?",
        choices: ["Thorin, Balin, Dwalin, Bifur, Bofur, Bombur, Oin, Gloin, Dori, Nori, Ori, Fili, and Kili", "Thalin, Bylin, Dave, Billy, Bobby, Bonnie, Ian, Gary, Nemo, Nori, Owen, Phil, and Kenneth", "Theo, Brandy, Dwight, Brian, Brody, Brady, Oren, Clive, Olive, Nancy, Ophelia, Fernando, and Kim"],
        answer: "Thorin, Balin, Dwalin, Bifur, Bofur, Bombur, Oin, Gloin, Dori, Nori, Ori, Fili, and Kili",
    }];
    
var startBtn = document.querySelector(".start-btn");
var questions = document.querySelector("#questions");
var currentQuestion = 0;

var questionText = document.querySelector("#question-text");
var question1 = document.querySelector(".btn-1");
var question2 = document.querySelector(".btn-2");
var question3 = document.querySelector(".btn-3");


var optionBtn = document.querySelector(".choice");

var highScores = document.querySelector("#scores");

var timer = 40;
var choiceBtn = document.querySelector(".btn");
var startTimerEl = document.querySelector(".game-timer");

var userScores = document.querySelector(".user-scores");


function endGame() {
    highScores.style.display = "block"
    questions.style.display = "none" 
}

function startGame() {
    startBtn.style.display = "none"
    questions.style.display = "block"
    highScores.style.display = "none"
    
    renderQuestion()
    startTimer()
}


function checkAnswer (event) {
    if (event.target.nodeName === "A") {
    if (currentQuestion >= quizQuestions.length) {
        return
        } 
        console.log(currentQuestion)
        console.log(quizQuestions.length)
        var userChoice = event.target.innerText
        if (userChoice === quizQuestions[currentQuestion].answer) {
            console.log("correct")
            currentQuestion++
        } else {
            console.log("incorrect")
            currentQuestion++
            timer = timer - 5;
        }
        if (currentQuestion === quizQuestions.length) {
            return endGame()
        }
        renderQuestion()
    }
}

function renderQuestion() {
    
    questionText.innerText = quizQuestions[currentQuestion].title 
    question1.innerText = quizQuestions[currentQuestion].choices[0]
    question2.innerText = quizQuestions[currentQuestion].choices[1]
    question3.innerText = quizQuestions[currentQuestion].choices[2]
    
};


//if quizQuestions.currentQuestions > 4, end quiz
//once end quiz - store data and calculate score
//prompt user initials - store in local storage and display to "high scores"
//if no high scores stored yet -- list "no user score entered yet.. "

    
    function startTimer () {
        console.log(timer)
        var gameTimer = setInterval(() => {
            timer--
            startTimerEl.innerText = "Time Remaining: " + timer
            if (timer === 0) {
                clearInterval(gameTimer)
                endGame() 
            }
        }, 1000);
}
    
    startBtn.addEventListener('click', startGame)
    optionBtn.addEventListener('click', checkAnswer)
    // optionBtn.addEventListener();

//setitem
//localStorage.setItem("highScores", jSON.stringify([{score: text, initials: text}]))
//getitem (if you want high scores displayed)

//need to store an array of objects
//each will have two keys - score and initials 
//so...will have to stringify before setting item into local storage. second argument (JSON.stringify())
//     // GAME LOGIC VARIABLES (TIMER, INDEX #)

//     //time interval and stop - set these separately


//     // SET 'TIMER' AND 'SCORE' VALUES FOR TOP OF GAME
//     timer = 5;
//     score = 0;
//     // START TIMER
//     var gameTimer = setInterval(() => {
//         timer--
//         timerText.text("Time Remaining: " + timer)

//         if (timer === 0) {

//             clearInterval(gameTimer)
//             endGame()
//         }

//     }, 1000);

// }
    
    //local storage - set up separately
    
    
    // ALERT CURRENT SCORE

    // CAPTURE USER INITIALS
    
    // SAVE SCORE AND INITIALS TO LOCALSTORAGE

    // RE-RENDER HIGH SCORES
