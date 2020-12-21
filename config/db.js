const mongoose = require("mongoose");

// Replace this with your MONGOURI.
const MONGOURI = "mongodb://vmdev1protainer.uksouth.cloudapp.azure.com/node-auth";

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true
    });
    console.log(`Connected to: ${MONGOURI}`);
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;