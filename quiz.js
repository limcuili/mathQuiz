function play() {

    var score = 0;
    var questions = [
      {
        question: "What do we call the branch of pure mathematics devoted primarily to the study of the integers? \n(a) Numerical Analysis \n(b) Number Theory\n(c) Combinatorics",
        answer: "b"
      },

      {
        question: "Which of these areas of mathematics is te most useful for a web developer? \n(a) Graph Theory \n(b) Topology \n(c) Mathematical Methods",
        answer: "a"
      },

      {
        question: "Which one of these Mathematicians is the most prolific amongst them? \n(a) Leonhard Euler \n(b) Augustin-Louis Cauchy\n(c) Karl Weierstrass",
        answer: "a"
      },
      {
        question: "What is the Euler constant (e = 2.718...) a representation of? \n(a) The ratio of a circle's circumference to its diameter \n(b)The solution to the equation i^2 + 1 = 0 \n(c) The base of the natural logarithm",
        answer: "c"
      },
      {
        question: "What is Pi (" + Math.PI + ") a representation of? \n(a) The ratio of a circle's circumference to its diameter \n(b)The solution to the equation i^2 + 1 = 0 \n(c) The base of the natural logarithm",
        answer: "a"
      }
    ]
    for (var i = 0; i < questions.length; i++) {
      var response = window.prompt(questions[i].question, questions[i].question.prompt);
      if (response == questions[i].answer) {
        score++;
        alert("Amazing!");
      } else {
        alert("Sorry, the anwser was " + questions[i].answer  + ".")
      }
    };
    alert ("Total questions answered correctly:" + score + "/" + questions.length)
}
