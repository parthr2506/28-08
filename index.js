const express = require("express")
const cookieParser = require("cookie-parser")
require("dotenv").config();

const cors = require('cors');
const app = express();

app.use(cors());
const port = 5500;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

const userRouter = require("./routes/userRoutes")
app.use("/api", userRouter)

const postRouter = require("./routes/postRoutes")
app.use("/api", postRouter)

app.listen(port, () => {
    console.log(`Listening on localhost:${port}`);
})