let phoneVerified = false;

document.getElementById("birth").addEventListener("input",function(){

    let value=this.value.replace(/\D/g,"");

    if(value.length>8) value=value.slice(0,8);

    if(value.length>=5){

        value=value.replace(/(\d{4})(\d{0,2})(\d{0,2})/,"$1-$2-$3");

    }

    this.value=value;

});

// 전화번호 자동 하이픈
document.getElementById("phone").addEventListener("input", function () {

    let value = this.value.replace(/\D/g, "");

    if (value.length > 11) value = value.slice(0, 11);

    if (value.length < 4) {

        this.value = value;

    } else if (value.length < 8) {

        this.value = value.replace(/(\d{3})(\d+)/, "$1-$2");

    } else {

        this.value = value.replace(/(\d{3})(\d{4})(\d+)/, "$1-$2-$3");

    }

});

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
    const birth = document.getElementById("birth").value.trim();
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

    if (!photo) {

        alert("프로필 사진을 등록해주세요.");
        return;

    }

    const reader = new FileReader();

    reader.onload = function (e) {

        localStorage.setItem("photo", e.target.result);

        location.href = "question.html";

    };

    reader.readAsDataURL(photo);

};

// 프로필 사진 미리보기
const photoInput = document.getElementById("photo");

photoInput.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {

        const preview = document.getElementById("photoPreview");

        preview.style.backgroundImage = `url(${e.target.result})`;
        preview.style.backgroundSize = "cover";
        preview.style.backgroundPosition = "center";

        preview.innerHTML = "";

    };

    reader.readAsDataURL(file);

});