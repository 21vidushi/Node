
const express = require("express");
const { connect } = require("./src/config/db")

const { getTickers } = require("./src/controllers/infoController");

require("dotenv").config();
connect();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.static("src/view"));

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/src/view/index.html");
    // res.send("hello world");
});
  
app.get("/api/tickers", getTickers);

app.listen(port, ()=>{
    console.log("app is running on port: "+port);
});
