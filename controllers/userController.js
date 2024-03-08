const asyncHandler = require("express-async-handler");

//@desc Register a User
//@route POST /api/users/register
//@access public
const userRegister = asyncHandler(async (req, res) => {
    res.json({ message: "Register the user" });
});

//@desc Login  User
//@route POST /api/users/register
//@access public
const loginUser = asyncHandler(async (req, res) => {
    res.json({ message: "Login user" });
});

//@desc Curretn User Info
//@route GET /api/users/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
    res.json({ message: "Current user information" });
});

module.exports = { userRegister ,loginUser, currentUser};