const UserModel = require ("../../Users/user.schema")
const getUserByEmailProvider = require("../../Users/providers/getUserByEmail")
const { StatusCodes } = require("http-status-codes")
const JWT = require("jsonwebtoken")
const{generateTokenProvider} = require("./generateToken.provider")
const bcrypt = require("bcrypt");



async function loginUserProvider(req, res){
    const { email, password } = req.body;

    // ✅ 2. Find user by email
    const user = await getUserByEmailProvider(email);
    if (!user) {
      return res.status(StatusCodes.FORBIDDEN).json({ reason: "invalid credentials" });
    }

    // ✅ 3. Compare password with bcrypt
    const isPassMatch = await bcrypt.compare(password, user.password);
    if (!isPassMatch) {
      return res.status(StatusCodes.FORBIDDEN).json({ reason: "invalid credentials" });
    }

    // ✅ 4. Generate JWT token
    const token = generateTokenProvider(user);

    console.log("✅ USER LOGGED IN:", {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });

    // ✅ 5. Return response
    return res.status(StatusCodes.OK).json({
      accessToken: token,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
}

module.exports ={
    loginUserProvider
}