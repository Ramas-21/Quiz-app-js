const quizData = [
  {
    question: "Which language runs in a web browser",
    a: "java",
    b: "C",
    c: "python",
    d: "Javascript",
    correct: "d",
  },
  {
    question: "What does CSS stand for",
    a: "Central style sheets",
    b: "Cascading style sheets",
    c: "Cascading simple sheets",
    d: "Cars style sheets",
    correct: "b",
  },
  {
    question: "What does HTML stand for",
    a: "Hypertext markup Language",
    b: "Hypertext markdown Language",
    c: "Hypertext markSide Language",
    d: "HyperLoop machine Language",
    correct: "a",
  },
  {
    question: "What year was javascript launched",
    a: "1936",
    b: "1995",
    c: "1934",
    d: "none of the above",
    correct: "b",
  },
];

const quiz = document.getElementById('quiz');
const answerEl = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers(){
  answerEl.forEach(answerEl => answerEl.checked = false);
}

function getSelected(){
  let answer;
  answerEl.forEach(answerEl =>{
    if(answerEl.checked){
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener('click', () =>{
  const answer = getSelected();
  if(answer){
    if(answer === quizData[currentQuiz].correct){
      score++;
    }
    currentQuiz++;
    if(currentQuiz < quizData.length){
      loadQuiz();
    }
    else{
      quiz.innerHTML = `
      <h2>You answered ${score}/${quizData.length} questions correctly.</h2> 
      <button onclick="location.reload()">Reload</button>`;
    }
  }
})