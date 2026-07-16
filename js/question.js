let currentQuestion = Number(localStorage.getItem("currentQuestion")) || 0;
let totalScore = Number(localStorage.getItem("totalScore")) || 0;
let userAnswers = JSON.parse(localStorage.getItem("userAnswers")) || [];

const questionTitle = document.getElementById("questionTitle");
const answers = document.getElementById("answers");
const prevBtn = document.getElementById("prevBtn");
const questionImage = document.getElementById("questionImage");

// 혹시 currentQuestion이 문제 개수를 넘어가면 처음으로
if (currentQuestion >= questions.length) {

    currentQuestion = 0;

    totalScore = 0;

    userAnswers = [];

    localStorage.setItem("currentQuestion", 0);
    localStorage.setItem("totalScore", 0);
    localStorage.setItem("userAnswers", JSON.stringify([]));

}

renderQuestion();

function renderQuestion() {

    const q = questions[currentQuestion];

    if (!q) {
        location.href = "result.html";
        return;
    }

    questionTitle.textContent = q.question;

    if (q.image && q.image !== "") {

        questionImage.src = q.image;
        questionImage.style.display = "block";

    } else {

        questionImage.style.display = "none";

    }

    answers.innerHTML = "";

    q.answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.className = "answer-btn";

        button.textContent = answer.text;

        if (
            userAnswers[currentQuestion] &&
            userAnswers[currentQuestion].answerIndex === index
        ) {

            button.style.background = "#ff8fb8";
            button.style.color = "white";

        }

        button.onclick = function () {

            document.querySelectorAll(".answer-btn").forEach(btn => {

                btn.disabled = true;

            });

            button.style.background = "#ff8fb8";
            button.style.color = "white";

            setTimeout(() => {

                nextQuestion(index);

            }, 200);

        };

        answers.appendChild(button);

    });

}

function nextQuestion(answerIndex) {

    if (userAnswers[currentQuestion]) {

        totalScore -= userAnswers[currentQuestion].score;

    }

    const score = questions[currentQuestion].answers[answerIndex].score;

    userAnswers[currentQuestion] = {

        answerIndex,

        score

    };

    totalScore += score;

    localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
    localStorage.setItem("totalScore", totalScore);

    currentQuestion++;

    localStorage.setItem("currentQuestion", currentQuestion);

    if (currentQuestion >= questions.length) {

        location.href = "result.html";
        return;

    }

    renderQuestion();

}

prevBtn.onclick = function () {

    if (currentQuestion === 0) {

        alert("첫 번째 질문입니다.");
        return;

    }

    currentQuestion--;

    localStorage.setItem("currentQuestion", currentQuestion);

    renderQuestion();

};