const createUserProvider = require("./providers/createUser.provider");
const {StatusCodes} = require("http-status-codes");


async function handleCreateUsers(req, res) {
    return await createUserProvider(req, res);
}

module.exports = {
    handleCreateUsers
}