const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

// serve static files.  It’s safer to use the absolute path of the directory that you want to serve.
// path.join(__dirname, 'public'): This part of the code constructs the absolute path to the 'public' directory. __dirname is a global variable in Node.js that represents the current directory of the module (the directory where the current script resides). path.join is used to concatenate this directory with the 'public' folder to create the absolute path to the static files.

app.use("/", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    return res.send(`Welcome to my Express.js server`);
});

app.get("/about", (req, res) => {
    return res.send(
        `Not much to say. I miss the sun and need to get hired. Soon.`
    );
});

// go example route http://localhost:3000/greet?name=John&lastName=Smith
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
