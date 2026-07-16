const totalScore = Number(localStorage.getItem("totalScore")) || 0;

const percent =
Math.round(totalScore / questions.length);

document.getElementById("percent").textContent =
percent + "%";

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
    resultDescription = "설명";

}
else if(percent >= 90){

    resultTitle = "결혼 후보";
    resultDescription = "설명";

}
else if(percent >= 80){

    resultTitle = "매우 좋은 궁합";
    resultDescription = "설명";

}
else if(percent >= 70){

    resultTitle = "좋은 궁합";
    resultDescription = "설명";

}
else if(percent >= 60){

    resultTitle = "가능성 있음";
    resultDescription = "설명";

}
else if(percent >= 50){

    resultTitle = "노력 필요";
    resultDescription = "설명";

}
else if(percent >= 40){

    resultTitle = "애매한 궁합";
    resultDescription = "설명";

}
else if(percent >= 30){

    resultTitle = "친구 추천";
    resultDescription = "설명";

}
else if(percent >= 20){

    resultTitle = "취향 차이";
    resultDescription = "설명";

}
else{

    resultTitle = "다음 기회에";
    resultDescription = "설명";

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

        percent: percent

    })

})
.then(res => {

    console.log("2. 응답:", res.status);

    return res.json();

})
.then(data => {

    console.log("3. 저장 완료", data);

})
.catch(err => {

    console.error("4. 에러", err);

});

document.getElementById("rankingBtn").onclick = function(){

    location.href = "ranking.html";

};
