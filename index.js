const express = require("express")
const cookieParser = require("cookie-parser")
require("dotenv").config();

const cors = require('cors');
const app = express();


app.use(cors());
const port = 5500;

app.use(express.json());
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())


app.get("/signup.html", (req, res) => {
    res.sendFile(path.join(__dirname, '28-08', 'public', 'sigup.html'));
});
app.get("/login.html", (req, res) => {
    res.sendFile(path.join(__dirname, '28-08', 'public', 'login.html'));
});
const userRouter = require("./routes/userRoutes")
app.use("/api", userRouter)

const postRouter = require("./routes/postRoutes")
app.use("/api", postRouter)

app.listen(port, () => {
    console.log(`Listening on localhost:${port}`);
})