const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./db");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes")

const { notFound, errorHandler } = require("./middleWares/errorMidddleWare");
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

connectDB();
console.log(process.env.WEATHER_API_KEY);

// middleware and routes 
app.use("/api", userRoutes);
app.use("/api", productRoutes);
app.use(notFound);
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
