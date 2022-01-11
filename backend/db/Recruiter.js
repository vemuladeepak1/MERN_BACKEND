const mongoose = require("mongoose");

let schema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: String,
      // validate: {
      //   validator: function (v) {
      //     // var v = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      //     return v !== "" ? /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(v) : true;
      //   },
      //   msg: "Phone number is invalid!",
      // },
    },
    bio: {
      type: String,
    },
    profile:{
      type: String,
    }
  },
  { collation: { locale: "en" } }
);

module.exports = mongoose.model("RecruiterInfo", schema);
