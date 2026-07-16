const express = require("express");
const cors = require("cors");
const path = require("path");

require("./db");

const app = express();
const participantRouter = require("./participants");

app.use(cors());
app.use(express.json());
app.use("/api/participants", participantRouter);

app.use(express.static(path.join(__dirname, "..")));

app.get("/api", (req, res) => {

    res.json({
        success: true,
        message: "유예정 남편 찾기 서버 정상 작동"
    });

});

const PORT = 3000;

app.listen(PORT, () => {

    console.log("================================");
    console.log("서버 실행 완료");
    console.log("http://localhost:3000");
    console.log("================================");

});