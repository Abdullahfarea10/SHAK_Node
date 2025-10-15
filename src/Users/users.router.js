
const express = require("express");
const usersRouter = express.Router();
const usersController = require("./users.controller");
const {StatusCodes} = require("http-status-codes");
const {validationResult} = require("express-validator");

const createUserValidator = require("./validators/users.validator");

usersRouter.post("/create", createUserValidator, (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
        return usersController.handleCreateUsers(req, res)
    }
    res.status(StatusCodes.BAD_REQUEST).json(result.array());
});

module.exports = usersRouter;