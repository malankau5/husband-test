fetch("/api/participants")
.then(res => res.json())
.then(users => {

    const rankingList = document.getElementById("rankingList");

    rankingList.innerHTML = "";

    users.forEach((user, index) => {

        let medal = `${index + 1}위`;

        if(index === 0){

            medal = "🥇";

        }else if(index === 1){

            medal = "🥈";

        }else if(index === 2){

            medal = "🥉";

        }

        rankingList.innerHTML += `

        <div class="ranking-card">

            <h2>${medal}</h2>

            ${
                user.photo
                ? `<img src="${user.photo}" class="result-photo">`
                : ""
            }

            <h3>${user.name}</h3>

            <h2>${user.percent}%</h2>

        </div>

        <br>

        `;

    });

});

document.getElementById("backBtn").onclick = function(){

    history.back();

};