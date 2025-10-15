const express = require("express");
const {validationResult} = require("express-validator");
const {StatusCodes} = require("http-status-codes");
const {loginValidator} = require("./validators/login.validator")
const {handleLogin} = require("./auth.controller");

const authRouter = express.Router();


authRouter.post("/login", loginValidator, (req, res)=>{
    const result = validationResult(req);
     if (result.isEmpty()) {
        return handleLogin(req, res);
    }
    res.status(StatusCodes.BAD_REQUEST).json(result.array());
});

module.exports = authRouter;
