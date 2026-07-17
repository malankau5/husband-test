const agree = document.getElementById("agree");
const nextBtn = document.getElementById("nextBtn");

nextBtn.onclick = function () {

    if (!agree.checked) {

        alert("개인정보 수집에 동의해주세요.");
        return;

    }

    location.href = "info.html";

};