const express = require("express");
const moongose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

//Express instance
const app = express();

//Routes
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

//DB Config
const db = require("./config/keys").mongoURI;

//Conect to MongoDB
moongose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Conected"))
  .catch(err => console.log(err));

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Passport middleware
app.use(passport.initialize());

//Pasport Config
require("./config/passport")(passport);

//Use routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server runing on port ${port}`));
