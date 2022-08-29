// require mongoose
const mongoose = require("mongoose");

// creating users Schema

const usersSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: [3, "Name must be at least 3 characters long"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "This email is already exist!"],
      // validator for email expression
      validate: [
        (val) => {
          if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)) {
            return true;
          }
          return false;
        },
        "This email is not valid!",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
      // validate: [val=>{
      //     if(val.length < 6){
      //         return false
      //     }
      //     return true
      // }, "Password must be at least 6 characters long"]
    },
    age: {
      type: Number,
      required: [true, "Age is required"],
      min: [18, "Age must be at least 18 years old"],
      max: [65, "Age must be at most 65 years old"],
    },
    gender: {
      type: String,
      required: false,
      default: null,
      validate: [
        (g) => {
          if (g == "male" || g == "female" || g == "other" ||  g == null ) {
              return true;
          }
          return false;
        },
        "gender can be null, female, male, or other ",
      ],
    },
    phone: {
      type: String,
      default: null,
      minlength: [10, "phone must be at least 10 characters long"],
    },
    address: {
      default: null,
      type: {
        country: {
          type: String,
          required: [true, "Country is required"],
          minlength: [3, "country must be at least 3 characters long"],
        },
        city: {
          type: String,
          required: [true, "City is required"],
          minlength: [3, "City must be at least 3 characters long"],
        },
        street: {
          type: String,
          required: [true, "Street is required"],
          minlength: [3, "Street must be at least 3 characters long"],
        },
      },
    },
    // created by Zaho
    hobbies: {
      type: Array,
      default: [],
      validate: [
        (arr) => {
          if (Array.isArray(arr)) {
            if (arr.length == 0 || arr.every((st) => typeof st == "string"))
              return true;
          }
          return false;
        },
        "hobbies must be an array of strings",
      ],
    },
  },
  { collection: "users" }
);

module.exports = mongoose.model("Users", usersSchema);
