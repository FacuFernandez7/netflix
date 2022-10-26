const express =  require("express");
const cors = require("cors");
const app = express();
const User = require('./routes/user')

//middlewares
app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));
//app.use(cors());
 
//routes
app.use("/user", User);

app.listen(5000, () => {console.log("Server started on port 5000")})

module.exports = app




