const express = require("express");
const connectDB = require("./config/db.config");
const app = require("./app");

connectDB();



const PORT = process.env.PORT ;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
