const express = require("express");
const fs = require('fs');
const path    = require("path");
let app = express();

app.use(express.static(__dirname));

const port = process.env.PORT || 1234;

app.listen(port, (err) => {
    if(err) console.log(err);
    else console.log("Sever start success!");
});

app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname + "/Main.html"));
});