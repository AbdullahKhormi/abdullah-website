const express = require("express");
const router = express.Router();
const navbarController = require("../controllers/nav.controller");

router.get("/", navbarController.getNavbars);

module.exports = router;