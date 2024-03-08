const express = require("express");
const { userRegister, loginUser, currentUser } = require("../controllers/userController");

const router = express.Router();

router.post("/register", userRegister);

router.post("/login", loginUser);

router.get("/current", currentUser);

module.exports = router;