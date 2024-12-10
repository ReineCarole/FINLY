const express = require("express");
const morgan = require("morgan");

require("dotenv").config();
require("./libs/dbConnect");
const session = require("express-session");
const flash = require("connect-flash");

const app = express();

app.use(express.static("public"));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: process.env.AUTH_SECRET,
    saveUnitialized: true,
    resave: false,
  })
);
app.use(flash());
app.set("views", "./views");
app.set("view engine", "ejs");

const dashboardRouter = require("./routes/dashboard.route");
const userRouter = require("./routes/user.route");

app.use("/", userRouter);
app.use("/dashboard", dashboardRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("*", (req, res) => {
  res.status(404).render("index", { message: "Not Found" });
});
