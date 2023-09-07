var express = require("express")
var path = require("path")
var cookieParser = require("cookie-parser")
var logger = require("morgan")
const cors = require("cors") // add at the top

var indexRouter = require("./routes/index")
var hotelsRouter = require("./routes/hotels")
var favouritesRouter = require("./routes/favourites")
/* var reviewsRouter = require("./routes/reviews") */

var app = express()

app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend's URL
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  }) // add after 'app' is created
)

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
/* app.use(express.static(path.join(__dirname, 'public'))); */

app.use("/", indexRouter)
app.use("/api/hotels", hotelsRouter)

/* app.use("/api/reviews", reviewsRouter)
 */

app.use("/api/favourites", favouritesRouter)
/* const PORT = 4000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
}) */

module.exports = app
