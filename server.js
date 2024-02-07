require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
// console.log(process.env);
const port = process.env.PORT;

app.use(cors({ origin: `http://localhost:${port}` }));
app.use("/", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    return res.send(`This is main page`);
});

app.get("/welcome", (req, res) => {
    return res.send(`Welcome.`);
});

app.get("/greet", (req, res) => {
    const { name, lastName } = req.query;

    if (name && lastName) {
        res.send(`Hello ${name} ${lastName}`);
    } else
        res.status(422).send(
            "Unprocessable Content. Please provide valid name and lastName parameters"
        );
});

app.listen(port, () => {
    console.log(`Express.js sever is running at http://localhost:${port}`);
});
