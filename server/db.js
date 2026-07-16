const mysql = require("mysql2");

const db = mysql.createConnection({

    host: "localhost",

    user: "root",

    password: "yyj0510",

    database: "husband_test"

});

db.connect((err) => {

    if (err) {

        console.error("DB 연결 실패");
        console.error(err);
        return;

    }

    console.log("MySQL 연결 성공");

});

module.exports = db;