const express =  require("express");
const cors = require("cors");
const app = express();
const User = require('./routes/user')
const Movie = require('./routes/movie')
const Serie = require('./routes/series')

//middlewares
app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));
app.use(cors());
 
//routes

app.use("/user", User);
app.use("/movie", Movie);
app.use("/series", Serie);

app.listen(5000, () => {console.log("Server started on port 5000")})

module.exports = app




