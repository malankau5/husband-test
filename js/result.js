const rankingBtn = document.getElementById("rankingBtn");
rankingBtn.disabled = true;

const totalScore = Number(localStorage.getItem("totalScore")) || 0;

const percent =
Math.round(totalScore / questions.length);

document.getElementById("percent").innerHTML = `${percent}<span style="font-size:26px;">점</span>`;

document.getElementById("userName").textContent =
localStorage.getItem("name") + "님";

const photo = localStorage.getItem("photo");

if(photo){

    document.getElementById("resultPhoto").src = photo;

}else{

    document.getElementById("resultPhoto").style.display = "none";

}

let resultTitle = "";
let resultDescription = "";

if(percent >= 95){

    resultTitle = "유예정 남편 확정";
    resultDescription = "당신은 이제 도망칠 수 없습니다.";

}
else if(percent >= 90){

    resultTitle = "결혼 후보";
    resultDescription = "애인 없으면 저랑 결혼하시죠.";

}
else if(percent >= 80){

    resultTitle = "매우 좋은 궁합";
    resultDescription = "저랑 사귀실래요?";

}
else if(percent >= 70){

    resultTitle = "좋은 궁합";
    resultDescription = "제 이상형이시네요.";

}
else if(percent >= 60){

    resultTitle = "나쁘지 않음";
    resultDescription = "친한 친구는 가능할 것 같아요.";

}
else if(percent >= 50){

    resultTitle = "노력 필요";
    resultDescription = "그래도 절반은 맞으셨네요.";

}
else if(percent >= 40){

    resultTitle = "좋지 않음";
    resultDescription = "음... 네... 뭐...";

}
else if(percent >= 30){

    resultTitle = "전혀 안 맞음";
    resultDescription = "앞으로 다시 볼 일은 없을 것 같네요.";

}
else if(percent >= 20){

    resultTitle = "나쁨";
    resultDescription = "저는 당신이 싫습니다.";

}
else{

    resultTitle = "최악";
    resultDescription = "당장 내 주변에서 꺼져.";

}


document.getElementById("resultTitle").textContent =
resultTitle;

document.getElementById("resultDescription").textContent =
resultDescription;

document.getElementById("restartBtn").onclick=function(){

    localStorage.removeItem("currentQuestion");
    localStorage.removeItem("totalScore");
    localStorage.removeItem("userAnswers");

    location.href="index.html";

};

document.getElementById("shareBtn").onclick=function(){

    if(navigator.share){

        navigator.share({

            title:"유예정 남편 찾기",

            text:"내 결과를 확인해보세요!",

            url:location.origin

        });

    }else{

        navigator.clipboard.writeText(location.origin);

        alert("링크가 복사되었습니다.");

    }

};

console.log("1. fetch 시작");

fetch("/api/participants", {

    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

body: JSON.stringify({

    name: localStorage.getItem("name"),
    phone: localStorage.getItem("phone"),
    birth: localStorage.getItem("birth"),
    region: localStorage.getItem("region"),
    photo: localStorage.getItem("photo"),
    percent: percent,

    answers: JSON.parse(localStorage.getItem("userAnswers") || "[]")

})

})
.then(async res => {

    console.log("응답:", res.status);

    if (!res.ok) {
        throw new Error(await res.text());
    }

    return res.json();

})
.then(data => {

    console.log("3. 저장 완료", data);

    rankingBtn.disabled = false;

})
.catch(err => {

    console.error("4. 에러", err);

});

rankingBtn.onclick = function(){

    if(rankingBtn.disabled){

        alert("결과를 저장하는 중입니다. 잠시만 기다려주세요.");
        return;

    }

    location.href = "ranking.html";

};
