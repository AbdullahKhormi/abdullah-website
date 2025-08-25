const Navbar = require("../models/nav.model");

exports.getNav = async () => {
  return await Navbar.find();
};