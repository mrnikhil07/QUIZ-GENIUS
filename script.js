const quizData = [
    {
        question: "Which country is comparable to the size of Maharashtra?",
        a: "Uganda",
        b: "Oman",
        c: "Tunisia",
        d: "Hungary",
        correct: "b",
    },
    {
        question: "When is Maharashtra Day celebrated?",
        a: "1st May",
        b: "1st July",
        c: "1st August",
        d: "1st September",
        correct: "a"
    },
    {
        question: "Who is the President of US?",
        a: "Narendra Modi",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b",
    },
    {
        question: "Which is the Summer Capital of Maharashtra?",
        a: "Nagpur",
        b:"Pune",
        c: "Mumbai",
        d:" Nashik",
        correct: "c",
    },
    {
        question: "What is the State Code of Maharashtra?",
        a:"MA",
        b:"MH",
        c:"MHA",
        d:"MUM",
         correct:"b",
    }, 
    {
        question:"What is the official language of Maharashtra?",
        a: "English",
        b:" Hindi",
        c: "Urdu",
        d: " Marathi",
        correct: "d"
    }    
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});

