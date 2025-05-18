require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path')


app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "/public")))

app.use(require("./routes/app.routes"));




app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});