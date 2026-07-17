const express = require("express");
const db = require("./db");

const router = express.Router();

router.post("/", (req, res) => {

    console.log("POST 요청 도착");
    console.log(req.body);

    const {
        name,
        phone,
        birth,
        region,
        photo,
        percent
    } = req.body;

    const sql = `
        INSERT INTO participants
        (name, phone, birth, region, photo, percent)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            name,
            phone,
            birth,
            region,
            photo,
            percent
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

module.exports = router;