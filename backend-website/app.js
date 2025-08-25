const express = require("express");
const cors = require("cors");
const navbarRoutes = require("./routes/nav.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/navbars", navbarRoutes);

module.exports = app;
