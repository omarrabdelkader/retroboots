const express = require("express");
const colors = require("colors");
const app = express();
const connectDB = require("./DB/db");
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const bootRoute = require("./Routes/bootsRoute/bootsRoute");
const userRoute = require("./Routes/userRoute/userRoute");

connectDB();

// Middlewares
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/api", bootRoute);
app.use("/api", userRoute);

app.listen(port, () =>
  console.log(`Server has started running on port: ${port}`)
);
