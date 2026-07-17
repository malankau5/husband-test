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

        const photo = user.photo
            ? user.photo
            : "https://placehold.co/80x80?text=USER";

        rankingList.innerHTML += `

        <div class="ranking-card">

            <div class="rank-left">

                <div class="rank-medal">
                    ${medal}
                </div>

                <img src="${photo}" class="rank-photo">

            </div>

            <div class="rank-center">

                <div class="rank-name">
                    ${user.name}
                </div>

                <div class="rank-score">
                    ${user.percent}점
                </div>

            </div>

        </div>

        `;

    });

});

document.getElementById("backBtn").onclick = function(){

    history.back();

};