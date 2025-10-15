const {loginUserProvider} = require("./providers/login.provider")

async function handleLogin(req, res){
    return await loginUserProvider(req, res);
}

module.exports = {
    handleLogin
}