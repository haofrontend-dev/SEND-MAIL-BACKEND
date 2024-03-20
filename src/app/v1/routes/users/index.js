// * LIBRARY
const express = require("express");

// * CONTROLLER
const UserController = require("../../controllers/user.controller");
const { asyncHandler } = require("../../../../common/helpers/asyncHandler");

const router = express.Router();

router.post("/login", asyncHandler(UserController.login));

module.exports = router;
