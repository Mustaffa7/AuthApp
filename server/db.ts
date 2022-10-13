var mongoose = require("mongoose");


mongoose.connect("mongodb+srv://admin:fX*740oPwCDr@cluster0.0dxjlki.mongodb.net/test")

var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function (){
    console.log("Db Connection Successful!");
});