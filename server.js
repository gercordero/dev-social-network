const express = require("express");
const moongose = require("mongoose");

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

//Express instance
const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

//Use routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server runing on port ${port}`));
