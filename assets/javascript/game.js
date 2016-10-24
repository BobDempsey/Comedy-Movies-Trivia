var questions = [{
    question: 'What character said "Like a glove"?',
    choices: ["Jack Sparrow", "Ace Ventura", "Stifler", "Dr. Evil"],
    correctAnswer: 1
}, {
    question: "What sport does Happy Gilmore play?",
    choices: ["Baseball", "Soccer", "Golf", "Basketball"],
    correctAnswer: 2
}, {
    question: 'What character said "It is anchorman, not anchorlady. And that is a scientific fact."',
    choices: ["Van Wilder", "Ron Burgundy", "Officer Slater", "Fletcher Reed"],
    correctAnswer: 1
}, {
    question: "What is the name of Ferris Bueller's best friend?",
    choices: ["Fogell", "Harry Dunne", "Evan Baxter", "Cameron Frye"],
    correctAnswer: 3
}, {
    question: 'What character said "Never go full retard."',
    choices: ["Waterloo", "Baker Street", "Kings Cross", "Kirk Lazarus"],
    correctAnswer: 3
}, {
    question: 'What is Napoleon Dynamite’s favorite sport?',
    choices: ["Tetherball", "Volleyball", "Racquetball", "Dodgeball"],
    correctAnswer: 0
}, {
    question: 'What character said "Austria! Well, then. G\'day mate! Let\'s put another shrimp on the barbie!"?',
    choices: ["Derek Zoolander", "Stanley Ipkiss", "Ricky Bobby", "Lloyd Christmas"],
    correctAnswer: 3
}, {
    question: 'What character said "I am a racing car driver just like you...except I am from formula uuuun"?',
    choices: ["Chip Douglas", "Jean Girard", "The Blue Raja", "Egon Spengler"],
    correctAnswer: 1
}, {
    question: 'What actor played Dr. Peter Venkman in "Ghostbusters"?',
    choices: ["Dan Aykroyd", "Rick Moranis", "Bill Murray", "Harold Ramis"],
    correctAnswer: 2
}, {
    question: 'What movie featured the character McLovin?',
    choices: ["Superbad", "Dodgeball", "Old School", "The Cable Guy"],
    correctAnswer: 0
}, ];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;


$(document).ready(function () {

// hides all gif related content
  hideGifs();

    // Display the first question
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();

    // On clicking next, display the next question
    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            } else {
                // TODO: Remove any message -> not sure if this is efficient to call this each time....
                $(document).find(".quizMessage").hide();
                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++; // Since we have already displayed the first question on DOM ready
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    //                    $(document).find(".nextButton").toggle();
                    //                    $(document).find(".playAgainButton").toggle();
                    // Change the text in the next button to ask if user wants to play again
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true;
                    displayGifs();
                }
            }
        } else { // quiz is over and clicked the next button (which now displays 'Play Again?'
        quizOver = false;
        $(document).find(".nextButton").text("Next Question");
        resetQuiz();
        displayCurrentQuestion();
        hideScore();
    }
});

});


// This displays the current question AND the choices
function displayCurrentQuestion() {

    console.log("In display current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".jumbotron > .question");
    var choiceList = $(document).find(".jumbotron> .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    // Set the questionClass text to the current question
    $(questionClass).text(question);

    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
    $(document).find("#main-jumbotron").show();
    $(document).find(".jumbotron-2").hide();

}

function displayScore() {
    $(document).find(".jumbotron > .result").text("You scored: " + correctAnswers + " out of " + questions.length);
    $(document).find(".jumbotron > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}

// hides all gif content
function hideGifs(){

    $(document).find("#thumbsWrapper").hide();
    $(document).find("#imgThumbs").hide();
    $(document).find("#imgDisplay").hide();
    $(document).find(".jumbotron-2").hide();
    $(document).find("#next-button-2").hide();

}

function displayGifs(){
    $(document).find("#thumbsWrapper").show();
    $(document).find("#imgThumbs").show();
    $(document).find("#imgDisplay").show();
     $(document).find(".jumbotron-2").show();
     $(document).find("#next-button-2").show();
     $(document).find(".result").show();
    $(document).find("#main-jumbotron").hide();


}