var formEl = document.getElementById("form");
var outputEl = document.getElementById("output");
var resetButton = document.getElementById("reset-button");
var q1Input = document.getElementById("question1");
var q2Input = document.getElementById("question2");
var q3Input = document.getElementById("question3");
var q4Input = document.getElementById("question4");
var q5Input = document.getElementById("question5");
var q6Input = document.getElementById("question6");
var q7Input = document.getElementById("question7");
var q8Input = document.getElementById("question8");
var q9Input = document.getElementById("question9");
var q10Input = document.getElementById("question10");
var q11Input = document.getElementById("question11");
var q12Input = document.getElementById("question12");
var q13Input = document.getElementById("question13");
var q14Input = document.getElementById("question14");

var a1El = document.getElementById("answer1");
var a2El = document.getElementById("answer2");
var a3El = document.getElementById("answer3");
var a4El = document.getElementById("answer4");
var a5El = document.getElementById("answer5");
var a6El = document.getElementById("answer6");
var a7El = document.getElementById("answer7");
var a8El = document.getElementById("answer8");
var a9El = document.getElementById("answer9");
var a10El = document.getElementById("answer10");
var a11El = document.getElementById("answer11");
var a12El = document.getElementById("answer12");
var a13El = document.getElementById("answer13");
var a14El = document.getElementById("answer14");

var answers = [];
outputEl.style.display = "none";
q1Input.focus();

function resetForm() {
  q1Input.value = "";
  q2Input.value = "";
  q3Input.value = "";
  q4Input.value = "";
  q5Input.value = "";
  q6Input.value = "";
  q7Input.value = "";
  q8Input.value = "";
  q9Input.value = "";
  q10Input.value = "";
  q11Input.value = "";
  q12Input.value = "";
  q13Input.value = "";
  q14Input.value = "";

  outputEl.style.display = "none";
  formEl.style.display = "block";
  q1Input.focus();
}

function renderAnswers() {
  answers.map(function(answer) {
    a1El.innerHTML = q1Input.value;
    a2El.innerHTML = q2Input.value;
    a3El.innerHTML = q3Input.value;
    a4El.innerHTML = q4Input.value;
    a5El.innerHTML = q5Input.value;
    a6El.innerHTML = q6Input.value;
    a7El.innerHTML = q7Input.value;
    a8El.innerHTML = q8Input.value;
    a9El.innerHTML = q9Input.value;
    a10El.innerHTML = q10Input.value;
    a11El.innerHTML = q11Input.value;
    a12El.innerHTML = q12Input.value;
    a13El.innerHTML = q13Input.value;
    a14El.innerHTML = q14Input.value;
  });

  formEl.style.display = "none";
  outputEl.style.display = "block";
}

formEl.addEventListener("submit", function(e) {
  e.preventDefault();

  answers.push(q1Input.value);
  answers.push(q2Input.value);
  answers.push(q3Input.value);
  answers.push(q4Input.value);
  answers.push(q5Input.value);
  answers.push(q6Input.value);
  answers.push(q7Input.value);
  answers.push(q8Input.value);
  answers.push(q9Input.value);
  answers.push(q10Input.value);
  answers.push(q11Input.value);
  answers.push(q12Input.value);
  answers.push(q13Input.value);
  answers.push(q14Input.value);

  renderAnswers();
});
