const express = require("express");
const dashBoard = require("../controllers/auth.wallpaper");
const authMiddleware=require("../middlewares/auth.middleware");

const router = express.Router();

router.get("/:category",authMiddleware,dashBoard.viewer);

module.exports = router;