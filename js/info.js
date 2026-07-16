let phoneVerified = false;

// 인증번호 받기
document.getElementById("sendCode").onclick = function () {

    alert("현재는 테스트 버전입니다.\n인증번호는 123456 입니다.");

};

// 인증 확인
document.getElementById("checkCode").onclick = function () {

    const code = document.getElementById("code").value.trim();

    if (code === "123456") {

        phoneVerified = true;

        alert("전화번호 인증이 완료되었습니다.");

    } else {

        alert("인증번호가 올바르지 않습니다.");

    }

};

// 다음 버튼
document.getElementById("next").onclick = function () {

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const birth = document.getElementById("birth").value;
    const region = document.getElementById("region").value;

    if (name === "") {
        alert("이름을 입력해주세요.");
        return;
    }

    if (phone === "") {
        alert("전화번호를 입력해주세요.");
        return;
    }

    if (!phoneVerified) {
        alert("전화번호 인증을 완료해주세요.");
        return;
    }

    if (birth === "") {
        alert("생년월일을 입력해주세요.");
        return;
    }

    // 참가자 정보 저장
    localStorage.setItem("name", name);
    localStorage.setItem("phone", phone);
    localStorage.setItem("birth", birth);
    localStorage.setItem("region", region);

    // 테스트 초기화
    localStorage.setItem("currentQuestion", "0");
    localStorage.setItem("totalScore", "0");
    localStorage.setItem("userAnswers", JSON.stringify([]));

    const photo = document.getElementById("photo").files[0];

    if (photo) {

        const reader = new FileReader();

        reader.onload = function (e) {

            localStorage.setItem("photo", e.target.result);

            location.href = "question.html";

        };

        reader.readAsDataURL(photo);

    } else {

        localStorage.removeItem("photo");

        location.href = "question.html";

    }

};