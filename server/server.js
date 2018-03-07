const express = require("express");
const app = express();
const path = require("path");
const publicPath = path.join(__dirname, "../public");
const PORT = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.listen(PORT, ()=>{
    console.log(`App listening at port ${PORT}`)
})
