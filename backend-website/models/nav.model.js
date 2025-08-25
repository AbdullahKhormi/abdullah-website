const mongoose = require("mongoose");

const navbarSchema = new mongoose.Schema({
  label: { type: String, required: true },
  link: { type: String, required: true }
});

module.exports = mongoose.model("Navbar", navbarSchema);