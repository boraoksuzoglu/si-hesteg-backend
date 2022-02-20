const express = require("express")
      app = express()
      mongoose = require("mongoose")
      uri = require("../config").mongodb
      server = require('http').createServer(app)
      bodyParser = require("body-parser")
      uploadFile = require("express-fileupload")

app.set('trust proxy', 1)
   .use(bodyParser.urlencoded({ extended: true }))
   .use(bodyParser.json())
   .use(uploadFile())
   .use("/public", express.static(__dirname + '/public'))
   .use("/restaurant", require("./routes/restaurant"))
   .use("/", require("./routes/index"))


server.listen(3000, () => {
    console.log("Boom!")
    mongoose.connect(uri)

})

mongoose.connection.on("connected", () => {
    console.log("Successfully connected to database");
});
mongoose.connection.on("error", (err) => {
    console.log("An error occured while connecting to database: "    + err);
});