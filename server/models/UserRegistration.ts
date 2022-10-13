var mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
var Schema = mongoose.Schema;
var userRegistrationSchema = new Schema({
      email: {
        type: String,
        default: "",
      },
      password: {
        type: String,
        default: "",
      },
      full_name: {
        type: String,
        default: "",
      },
      contact: {
        type: Number,
      },
      dob: {
        type: String,
        default: "",
      },
      img:
      {
        data: Buffer,
        contentType: String,
      }
});

module.exports = mongoose.model("UserRegistration", userRegistrationSchema);