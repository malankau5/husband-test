const progressBar=document.getElementById("progressBar");

let currentQuestion = Number(localStorage.getItem("currentQuestion")) || 0;
let totalScore = Number(localStorage.getItem("totalScore")) || 0;
let userAnswers = JSON.parse(localStorage.getItem("userAnswers")) || [];

const questionTitle = document.getElementById("questionTitle");
const answers = document.getElementById("answers");
const prevBtn = document.getElementById("prevBtn");
const questionImage = document.getElementById("questionImage");

// 범위 초과 시 초기화
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

    progressBar.style.width=
    ((currentQuestion+1)/questions.length)*100+"%";

    if (!q) {
        location.href = "result.html";
        return;
    }

   document.getElementById("category").textContent = "#" + q.category;

   questionTitle.textContent = q.question;

   document.getElementById("questionDescription").textContent = q.description || "";

    // 이미지 표시
    if (q.image && q.image !== "") {

        questionImage.src = q.image;
        questionImage.style.display = "block";

    } else {

        questionImage.style.display = "none";

    }

    answers.innerHTML = "";

    if(q.answers.length >= 7){

        answers.style.gridTemplateColumns = "1fr 1fr";

    }else{

        answers.style.gridTemplateColumns = "1fr";

    }

    q.answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.className = "answer-btn";
        button.textContent = answer.text;

        // 이전 선택 표시
        if (
            userAnswers[currentQuestion] &&
            userAnswers[currentQuestion].answerIndex === index
        ) {
            button.classList.add("selected");
        }

        button.onclick = () => {

            // 여러 번 클릭 방지
            document.querySelectorAll(".answer-btn").forEach(btn => {
                btn.disabled = true;
                btn.classList.remove("selected");
            });

            button.classList.add("selected");

            // 버튼 눌림 효과
            button.animate([
                { transform: "scale(1)" },
                { transform: "scale(.97)" },
                { transform: "scale(1)" }
            ], {
                duration: 180,
                easing: "ease"
            });

            setTimeout(() => {
                nextQuestion(index);
            }, 220);

        };

        answers.appendChild(button);

    });

}

// 다음 문제
function nextQuestion(answerIndex) {

    if (userAnswers[currentQuestion]) {
        totalScore -= userAnswers[currentQuestion].score;
    }

    const score =
        questions[currentQuestion].answers[answerIndex].score;

    userAnswers[currentQuestion] = {
        answerIndex,
        score
    };

    totalScore += score;

    localStorage.setItem(
        "userAnswers",
        JSON.stringify(userAnswers)
    );

    localStorage.setItem(
        "totalScore",
        totalScore
    );

    currentQuestion++;

    localStorage.setItem(
        "currentQuestion",
        currentQuestion
    );

    // 페이지 전환 효과
    document.body.style.opacity = "0";

    setTimeout(() => {

        if (currentQuestion >= questions.length) {

            location.href = "result.html";

        } else {

            renderQuestion();

            document.body.style.opacity = "1";

        }

    }, 180);

}

// 이전 버튼
prevBtn.onclick = () => {

    if (currentQuestion === 0) {

        alert("첫 번째 질문입니다.");
        return;

    }

    currentQuestion--;

    localStorage.setItem(
        "currentQuestion",
        currentQuestion
    );

    renderQuestion();

};

// 페이지 등장 애니메이션
document.body.style.opacity = "0";

window.onload = () => {

    document.body.style.transition = "opacity .25s ease";
    document.body.style.opacity = "1";

};