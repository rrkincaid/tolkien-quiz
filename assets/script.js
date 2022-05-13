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
    }]
    
var startBtn = document.querySelector (".start-btn")
var questions = document.querySelector("#questions")
var currentQuestion = 0

var questionText = document.querySelector ("#question-text")
var question1 = document.querySelector (".btn-1")
var question2 = document.querySelector (".btn-2")
var question3 = document.querySelector(".btn-3")
// var question4 = document.querySelector(".btn-4")

var optionBtn = document.querySelector(".choice")

startBtn.addEventListener('click', startGame)

function startGame() {
    startBtn.style.display = "none"
    questions.style.display = "block"

    renderQuestion()
    startTimer()
}

optionBtn.addEventListener('click', checkAnswer)

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
        }
        renderQuestion()
    }
}

function renderQuestion() {

    questionText.innerText = quizQuestions[currentQuestion].title 
    question1.innerText = quizQuestions[currentQuestion].choices[0]
    question2.innerText = quizQuestions[currentQuestion].choices[1]
    question3.innerText = quizQuestions[currentQuestion].choices[2]
    // question4.innerText = quizQuestions[currentQuestion].choices[3]
}


// function startTimer() {
var timer = 20;

var startTimer = document.querySelector(".game-timer")

function startTimer(event) {
    console.log(event)
    var gameTimer = setInterval(() => {
        timer--
        startTimer.text("Time Remaining: " + timer)
        if (timer === 0) {
 clearInterval(gameTimer)
            endGame()
        }

    }, 1000);
}
//     // GAME LOGIC VARIABLES (TIMER, INDEX #)

//     //time interval and stop - set these separately
// var timerCurrent = 20;
// var currentIndex = 0;

// var timerEl = document.querySelector();

    
//     function startTimer() {
//         timer = setInterval(function () {
//             timerCurrent--
//             timerEl.textContent = timer;
    
//             if (timer === 0) {
//                 clearInterval(timer);
//                 alert("Time's Up!")
//                 return
//             }
//         })
// };


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
    
    
    // TODO: VARIABLES!

    
    // CAPTURE ALL HTML NECESSARY HTML ELEMENTS
    
    // $( function() {
    //     $( "input" ).checkboxradio();
    // } );


// TODO: INITIALIZE PAGE (HIDING/SHOWING BUTTONS, ETC)





// TODO: BUTTON CLICK EVENT LISTENERS (START BTN, GAME BTN)

// START BTN:
// RUN 'STARTGAME' FUNCTIONALITY


// GAME BTN:




// LOOP THROUGH KITTEN ARRAY ON CLICK
// RENDERKITTEN ON CLICK
// COUNT CLICKS

// TODO: GAME FUNCTIONALITY
// STARTGAME:



    // HIDE 'START' BUTTON


        // SHOW 'GAME' BUTTON


    // SET 'TIMER' AND 'SCORE' VALUES FOR TOP OF GAME
    // RUN 'ENDGAME' WHEN TIMER IS UP


    // ENDGAME:


// HIDE 'GAME' BUTTON
//gameBtn.hide()
// SHOW 'START' BUTTON'
//startBtn.show()
    // ALERT CURRENT SCORE

    // CAPTURE USER INITIALS
    
    // SAVE SCORE AND INITIALS TO LOCALSTORAGE

    // RE-RENDER HIGH SCORES
