let users = [];

fetch("/api/participants")
.then(res => res.json())
.then(data => {

    users = data;

    renderTable(users);

});

function renderTable(list){

    const tbody = document.getElementById("tbody");

    tbody.innerHTML = "";

    list.forEach(user => {

        tbody.innerHTML += `

        <tr>

            <td>

                ${
                    user.photo
                    ? `<img src="${user.photo}" class="photo">`
                    : "-"
                }

            </td>

            <td>${user.name}</td>

            <td>${user.phone}</td>

            <td>${user.birth ? user.birth.substring(0,10) : "-"}</td>

            <td>${user.region}</td>

            <td>${user.percent}%</td>

        </tr>

        `;

    });

}

document.getElementById("search").addEventListener("input", function(){

    const keyword = this.value.toLowerCase().trim();

    const filtered = users.filter(user => {

        const name = (user.name || "").toLowerCase();
        const phone = (user.phone || "").toLowerCase();

        return name.includes(keyword) || phone.includes(keyword);

    });

    renderTable(filtered);

});