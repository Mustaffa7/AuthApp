const express = require("express");
const http = require("http");
const cors = require("cors");
var bodyparser = require("body-parser");
const port = process.env.PORT || 4002;
var db = require("./db");

const app = express();
app.use(cors);
// Middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true,
    })
);
var apiController = require("./controller/apiController");
app.use("/api/", apiController);

app.all("/api/*", function (req:any ,res:any, next:any){
    return res.status(400).json({
        success:204,
        message: "invalid_request",
    });
});



const server = http.createServer(app);
server.listen(port, () => console.log(`Listening on port ${port}`));

