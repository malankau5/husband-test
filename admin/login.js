document.getElementById("loginBtn").onclick = function () {

    const password =
        document.getElementById("password").value;

    if (password === "admin1234") {

        location.href = "index.html";

    } else {

        alert("비밀번호가 올바르지 않습니다.");

    }

};