require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const port = process.env.PORT;

app.use(cors({ origin: `http://localhost:${port}` }));
app.use("/", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    return res.send(`This is main page`);
});

app.get("/homework", (req, res) => {
    return res.send(`This is the homework page.`);
});

app.get("/homework/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const responseData = { message: `homework id: ${id}` };

    if (!isNaN(id)) {
        const responseData = { message: `homework id: ${id}` };
        return res.send(responseData.message);
    } else {
        res.status(422).send(
            "Unprocessable Content. Please provide a valid id parameter"
        );
    }
});

app.listen(port, () => {
    console.log(`Express.js sever is running at http://localhost:${port}`);
});
