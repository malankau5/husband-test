const express = require("express");
const db = require("./db");

const router = express.Router();

db.query(`
CREATE TABLE IF NOT EXISTS participants (
    id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(100) NOT NULL,
    phone VARCHAR(30) NOT NULL,
    birth VARCHAR(30) NOT NULL,
    region VARCHAR(100) NOT NULL,

    photo LONGTEXT,

    percent INT NOT NULL,

    answers JSON,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`, (err) => {

    if (err) {

        console.error("participants 테이블 생성 실패");
        console.error(err);

    } else {

        console.log("participants 테이블 준비 완료");

    }

});

router.post("/", (req, res) => {

    console.log("POST 요청 도착");
    console.log(req.body);

    const {
        name,
        phone,
        birth,
        region,
        photo,
        percent,
        answers
    } = req.body;

    const sql = `
        INSERT INTO participants
        (name, phone, birth, region, photo, percent, answers)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
        name,
        phone,
        birth,
        region,
        photo,
        percent,
        JSON.stringify(answers)
        ],
        (err, result) => {

            if (err) {

                console.error("POST 오류");
                console.error(err);

                return res.status(500).json({
                    success: false,
                    code: err.code,
                    message: err.message
                });

            }

            res.json({
                success: true
            });

        }
    );

});

router.get("/", (req, res) => {

    db.query(
        `
        SELECT
            id,
            name,
            photo,
            percent
        FROM participants
        ORDER BY percent DESC, id ASC
        `,
        (err, results) => {

            if (err) {

                console.error("GET 오류");
                console.error(err);

                return res.status(500).json({
                    success: false,
                    code: err.code,
                    message: err.message
                });

            }

            res.json(results);

        }
    );

});

router.get("/ranking/:name", (req, res) => {

    db.query(
        `
        SELECT
            name,
            photo,
            percent
        FROM participants
        ORDER BY percent DESC, id ASC
        `,
        (err, results) => {

            if (err) {

                console.error("RANK 오류");
                console.error(err);

                return res.status(500).json({
                    success: false,
                    code: err.code,
                    message: err.message
                });

            }

            const index = results.findIndex(
                user => user.name === req.params.name
            );

            res.json({

                rank: index + 1,
                total: results.length

            });

        }
    );

});

router.get("/admin", (req, res) => {

    db.query(
        `
        SELECT
            id,
            name,
            phone,
            birth,
            region,
            photo,
            percent,
            answers,
            created_at
        FROM participants
        ORDER BY created_at DESC
        `,
        (err, results) => {

            if (err) {

                console.error(err);

                return res.status(500).json({
                    success: false
                });

            }

            res.json(results);

        }
    );

});

router.post("/reset", (req, res) => {

    db.query("TRUNCATE TABLE participants", (err) => {

        if (err) {
            console.error(err);
            return res.status(500).json({
                success: false
            });
        }

        res.json({
            success: true
        });

    });

});

module.exports = router;

router.delete("/:id", (req, res) => {

    db.query(
        "DELETE FROM participants WHERE id = ?",
        [req.params.id],
        (err, result) => {

            if (err) {
                console.error(err);

                return res.status(500).json({
                    success: false
                });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({
                    success: false,
                    message: "참가자를 찾을 수 없습니다."
                });
            }

            res.json({
                success: true
            });

        }
    );

});