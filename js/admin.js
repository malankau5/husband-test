const userList=document.getElementById("userList");
const detail=document.getElementById("detail");

fetch("/api/participants/admin")

.then(res=>res.json())

.then(users=>{

    users.forEach(user=>{

        const card=document.createElement("div");

        card.className="user-card";

        card.innerHTML=`

            <img src="${user.photo}" class="user-photo">

            <div>

                <b>${user.name}</b><br>

                ${user.percent}점

            </div>

        `;

        card.onclick=()=>showUser(user);

        userList.appendChild(card);

    });

});

function showUser(user){

    const answers=JSON.parse(user.answers||"[]");

    let html="";

    answers.forEach((answer,index)=>{

    if(answer==null) return;

    html+=`

    <div class="answer">

        <div class="question-title">
            ${questions[index].question}
        </div>

        <div class="question-answer">
            ✔ ${questions[index].answers[answer.answerIndex].text}
        </div>

    </div>

    `;

});

    detail.innerHTML=`

        <img src="${user.photo}">

        <h2>${user.name}</h2>

        <p><b>전화번호</b> ${user.phone}</p>

        <p><b>생년월일</b> ${user.birth}</p>

        <p><b>지역</b> ${user.region}</p>

        <p><b>점수</b> ${user.percent}점</p>

        <hr><br>

        <h3>선택한 답변</h3>

        ${html}

    `;

}