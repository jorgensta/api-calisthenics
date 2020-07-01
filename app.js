const express = require("express");
const app = express();

const PORT = 4000;

app.get("/", (req, res, next) => {
    res.send({ message: "Hallaballa" });
});


app.listen(PORT, () => { console.log(`App listening on port ${PORT}`) });