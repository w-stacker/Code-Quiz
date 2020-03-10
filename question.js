function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 
// create questions here
var questions = [
    new Question("Who invented the cell phone?", ["Alexander Graham Bell", "Steve Jobs","Martin Cooper", "Thomas Edison"], "Martin Cooper"),
    new Question("Who is the fastest man in the world?", ["Asafa Powell", "Yohan Blake","Usain Bolt", "Justin Gatlin"], "Usain Bolt"),
    new Question("What is the amount of megapixels in the S20 Ultra 5G? ", ["12MP", "48MP", "16MP", "108MP"], "108MP"),
    new Question("What fastfood chain made bubble gum flavored broccoli?", ["Popeye's", "McDonalds","Panda Express", "Yoshi Noya"], "McDonald's"),
    new Question("What letter does not appear in any U.S. state name?", ["L", "Z","J", "Q"], "Q"),
    new Question("What color were the first oranges?", ["Blue", "Green","Red", "Orange"], "Green"),
    new Question("What do you call a cow-bison hybrid?", ["Beefalo", "Bow", "Cison", "Bullson"], "Beefalo"),
    new Question("How many wars is the united states in currently?", ["4", "3","12", "7"], "7"),
    new Question("Where did the corona virus originate?", ["China", "Russia", "England", "Cuba"], "China"),
    new Question("Who invented the Playstation", ["Don Cartegena", "Ken Kutaragi", "Sony", "Chan Po"], "Ken Kutaragi"),
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();

//<div id="question">What color do you see? <img src="/assets/grape-purple-epodex-epoxy-grundierung-epoxidharz-einfarben2.jpg" width="100" height="100"></div>