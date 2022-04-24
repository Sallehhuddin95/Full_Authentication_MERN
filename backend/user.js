const mongoose = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");
const passportLocalMongoose = require("passport-local-mongoose");
const user = new mongoose.Schema({
  fullname: String,
  username: String,
  email: String,
  password: String,
  googleId: String,
});

user.plugin(passportLocalMongoose);
user.plugin(findOrCreate);

module.exports = mongoose.model("User", user);
