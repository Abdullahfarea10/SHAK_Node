const{Schema, model} = require("mongoose");


const userSchema = new Schema ({
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxlength: [100, "First name can not be more than 100 characters"],
    } ,
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxlength: [100, "Last name can not be more than 100 characters"],
    } ,
    email: {
        type: String,
        required:true ,
        trim: true,
        unique: true ,
        lowercase: true,
        validate: {validator:function (email) {
            return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
        },
        message: () => {"Email is not valid. please enter a valid email address"},
}
},

password: {
        type: String,
        required:true ,
},
});

const UserModel = model("User", userSchema);
module.exports = UserModel;
