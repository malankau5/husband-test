const userList = document.getElementById("userList");
const detail = document.getElementById("detail");
const searchInput = document.getElementById("searchInput");

let users = [];
let selectedId = null;

// 참가자 불러오기
fetch("/api/participants/admin")
    .then(res => res.json())
    .then(data => {

        users = data;

        renderUserList(users);

        if (users.length > 0) {
            selectedId = users[0].id;
            renderUserList(users);
            showUser(users[0]);
        }

    })
    .catch(err => {
        console.error(err);
        detail.innerHTML = "<h2>참가자 정보를 불러오지 못했습니다.</h2>";
    });

// 검색
searchInput.addEventListener("input", () => {

    const keyword = searchInput.value.trim().toLowerCase();

    const filtered = users.filter(user =>
        user.name.toLowerCase().includes(keyword)
    );

    renderUserList(filtered);

});

// 참가자 목록 출력
function renderUserList(list) {

    userList.innerHTML = "";

    if (list.length === 0) {

        userList.innerHTML = `
            <div class="empty-user">
                검색 결과가 없습니다.
            </div>
        `;

        return;
    }

    list.forEach(user => {

        const card = document.createElement("div");

        card.className = "user-card";

        if (selectedId === user.id) {
            card.classList.add("active");
        }

        const photo = user.photo
            ? user.photo
            : "https://placehold.co/80x80?text=USER";

        card.innerHTML = `
            <img src="${photo}" class="user-photo">

            <div class="user-info">

                <div class="user-name">${user.name}</div>

                <div class="user-score">
                    ${user.percent}점
                </div>

            </div>
        `;

        card.onclick = () => {

            selectedId = user.id;

            renderUserList(list);

            showUser(user);

        };

        userList.appendChild(card);

    });

}

// 상세보기
function showUser(user) {

    const answers = user.answers || [];

    const photo = user.photo
        ? user.photo
        : "https://placehold.co/250x250?text=USER";

    let answerHtml = "";

    answers.forEach((answer, index) => {

        const q = questions[index];

        if (!q) return;

        const selected = q.answers[answer.answerIndex];

        answerHtml += `

            <div class="answer-card">

                <div class="question">

                    ${index + 1}. ${q.question}

                </div>

                <div class="selected">

                    ✔ ${selected ? selected.text : "선택 안함"}

                </div>

                <div class="score">

                    ${answer.score}점

                </div>

            </div>

        `;

    });

    detail.innerHTML = `

        <div class="profile">

            <img src="${photo}" class="profile-image">

            <div class="profile-info">

                <h2>${user.name}</h2>

                <div>📞 ${user.phone}</div>

                <div>🎂 ${user.birth}</div>

                <div>📍 ${user.region}</div>

                <div class="percent">

                    ${user.percent}점

                </div>

            </div>

        </div>

        <hr>

        <div class="answer-title">

            선택한 답변 (${answers.length}개)

        </div>

        <div class="answer-list">

            ${answerHtml}

        </div>

    `;

}

document.getElementById("resetBtn").onclick = async function () {

    const ok = confirm(
        "정말 참가자 기록을 모두 삭제하시겠습니까?\n이 작업은 되돌릴 수 없습니다."
    );

    if (!ok) return;

    try {

        const res = await fetch("/api/participants/reset", {
            method: "POST"
        });

        const data = await res.json();

        if (data.success) {

            alert("참가자 기록이 모두 삭제되었습니다.");

            location.reload();

        } else {

            alert("삭제에 실패했습니다.");

        }

    } catch (e) {

        console.error(e);
        alert("삭제 중 오류가 발생했습니다.");

    }

};