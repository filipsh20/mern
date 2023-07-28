import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: { type: String, require: true, min: 8, max: 50 },
    email: { type: String, require: true, max: 80 },
    password: { type: String, require: true, min: 8 },
    picturePath: { type: String, default: "" },
    verified: { type: Boolean, default: false },
    creation: { type: Date, default: Date.now() }
});

const User = mongoose.model("Users", UserSchema);
export default User;