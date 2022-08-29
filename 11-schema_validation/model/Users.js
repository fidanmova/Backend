const mongoose = require("mongoose");

const UsersSchema = mongoose.Schema(
  {
    name: { type: String, minlength: 3, maxlength: 10 },
    age: {
      type: Number,
      validate: [
        (val) => {
          if (val % 2 == 0 && val >= 18 && val <= 60) {
            return true;
          }
          return false;
        },
        "WE NEED even number between 18 and 60",
      ],
    },
    /**
     * with validation:
     * FIELD_NAME: {type: TYPE, STUFF1: [validate, 'ERROR_MESSAGE']}
     *
     */
    married: { type: Boolean, default: false },
    email: {
      type: String,
      unique: true,
      required: true,
      validate: [(val) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)) {
          return true;
        }
        return false;
      }, "Email is NOT Valid"]
    },
    address: {
      type: {
        country: { type: String, required: [true, "WHERE ARE YOU MAN"] },
        city: String,
        zipCode: { type: Number, max: 99999, min: 9999 },
      },
      required: false,
    },
    birthDate: Date,
    hobbies: [{ type: String, maxlength: 15 }],
  },
  { collection: "users" }
);

const Users = mongoose.model("users", UsersSchema);
module.exports = Users;
