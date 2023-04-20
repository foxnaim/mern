const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors({
    origin: "http://localhost:5173"
}));

app.post('/reg' , (req, res) => {
    console.log(req.body);
    res.json(req.body);
});

app.listen(4000);