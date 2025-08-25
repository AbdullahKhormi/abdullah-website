const navService = require("../services/navbar.service");

exports.getNavbars = async (req, res, next) => {
  try {
    const navbars = await navService.getNav();
    res.json(navbars);
  } catch (error) {
    next(error);
  }
};