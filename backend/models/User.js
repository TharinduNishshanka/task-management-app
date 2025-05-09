const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  googleId: String,
  displayName: String,
});
module.exports = mongoose.model('User', UserSchema);
