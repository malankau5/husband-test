const userList = document.getElementById("userList");
const detail = document.getElementById("detail");

fetch("/api/participants/admin")
    .then(res => {
        if (!res.ok) throw new Error("데이터를 불러오지 못했습니다.");
        return res.json();
    })
    .then(users => {

        userList.innerHTML = "";

        users.forEach(user => {

            const card = document.createElement("div");
            card.className = "user-card";

            const photo = user.photo && user.photo !== "null"
                ? user.photo
                : "https://placehold.co/100x100?text=No+Photo";

            card.innerHTML = `
                <img src="${photo}" class="user-photo">
                <div>
                    <b>${user.name}</b><br>
                    ${user.percent}점
                </div>
            `;

            card.onclick = () => showUser(user);

            userList.appendChild(card);

        });

        if (users.length > 0) {
            showUser(users[0]);
        }

    })
    .catch(err => {
        console.error(err);
        detail.innerHTML = `<h2>데이터를 불러오지 못했습니다.</h2>`;
    });

function showUser(user) {

    // 이미 배열로 오므로 JSON.parse 하지 않는다.
    const answers = user.answers || [];

    const photo = user.photo && user.photo !== "null"
        ? user.photo
        : "https://placehold.co/250x250?text=No+Photo";

    let html = "";

    answers.forEach((answer, index) => {

        const question = questions[index];

        if (!question) return;
        if (!answer) return;

        const selected = question.answers[answer.answerIndex];

        html += `
            <div class="answer">
                <b>${question.question}</b><br>
                <span style="color:#ff2d7a;">
                    ✔ ${selected ? selected.text : "선택 안함"}
                </span><br>
                <small>점수 : ${answer.score}</small>
            </div>
        `;
    });

    detail.innerHTML = `
        <img src="${photo}">

        <h2>${user.name}</h2>

        <p><b>전화번호</b> ${user.phone}</p>
        <p><b>생년월일</b> ${user.birth}</p>
        <p><b>지역</b> ${user.region}</p>
        <p><b>점수</b> ${user.percent}점</p>

        <hr>

        <h3>선택한 답변 (${answers.length}개)</h3>

        ${html}
    `;
}