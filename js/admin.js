const userList = document.getElementById("userList");
const detail = document.getElementById("detail");
const searchInput = document.getElementById("searchInput");

let users = [];

fetch("/api/participants/admin")
    .then(res => res.json())
    .then(data => {
        users = data;
        renderUsers(users);
    });

function renderUsers(list){

    userList.innerHTML = "";

    list.forEach(user=>{

        const card=document.createElement("div");
        card.className="user-card";

        card.innerHTML=`
            <img src="${user.photo}" class="user-photo">

            <div>
                <div style="font-weight:700;font-size:17px;">
                    ${user.name}
                </div>

                <div style="color:#ff2d7a;font-weight:bold;">
                    ${user.percent}점
                </div>
            </div>
        `;

        card.onclick=()=>{

            document.querySelectorAll(".user-card")
                .forEach(c=>c.classList.remove("active"));

            card.classList.add("active");

            showUser(user);

        };

        userList.appendChild(card);

    });

}

function showUser(user){

    const deleteBtn = document.getElementById("deleteBtn");

    const answers = Array.isArray(user.answers)
    ? user.answers
    : JSON.parse(user.answers || "[]");

    let html="";

    answers.forEach((answer,index)=>{

        if(!answer) return;

        const question=questions[index];
        const selected=question.answers[answer.answerIndex];

        html+=`
            <div style="
                border:1px solid #eee;
                border-radius:16px;
                padding:18px;
                margin-bottom:15px;
            ">

                <div style="font-weight:bold;margin-bottom:10px;">
                    ${index+1}. ${question.question}
                </div>

                <div style="color:#ff2d7a;font-weight:600;">
                    ✔ ${selected.text}
                </div>

                <div style="margin-top:8px;color:#888;">
                    점수 : ${answer.score}
                </div>

            </div>
        `;

    });

    detail.innerHTML=`

        <img
            src="${user.photo}"
            style="
                width:180px;
                height:180px;
                object-fit:cover;
                border-radius:25px;
                border:5px solid #ff2d7a;
                margin-bottom:20px;
            ">

        <h2 style="margin-bottom:15px;">
            ${user.name}
        </h2>

        <p><b>전화번호</b> ${user.phone}</p>
        <p><b>생년월일</b> ${user.birth}</p>
        <p><b>지역</b> ${user.region}</p>

        <div style="
            margin:20px 0;
            display:inline-block;
            background:#ff2d7a;
            color:white;
            padding:10px 18px;
            border-radius:999px;
            font-weight:bold;
            width:max-content;
        ">
            ${user.percent}점
        </div>

        <h3 style="margin:25px 0 15px;">
            선택한 답변
        </h3>

        <div style="
            flex:1;
            overflow-y:auto;
            padding-right:10px;
        ">
            ${html}
        </div>

    `;

deleteBtn.style.display = "inline-block";

deleteBtn.onclick = async () => {

    if (!confirm(`${user.name}님을 삭제하시겠습니까?`)) {
        return;
    }

    try {

        const res = await fetch(`/api/participants/${user.id}`, {
            method: "DELETE"
        });

        const result = await res.json();

        if (result.success) {
            alert("삭제되었습니다.");
            location.reload();
        } else {
            alert("삭제에 실패했습니다.");
        }

    } catch (err) {
        console.error(err);
        alert("오류가 발생했습니다.");
    }

};

}

searchInput.addEventListener("input",()=>{

    const keyword=searchInput.value.trim();

    renderUsers(
        users.filter(user=>user.name.includes(keyword))
    );

});