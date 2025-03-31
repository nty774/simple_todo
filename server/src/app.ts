import express, { json } from "express";
import dotenv from "dotenv";
import { connectDB } from "./db";
import todoRoutes from "./routes/todo";
import cors from "cors";

dotenv.config({
  path: ".env",
});
const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);
app.use(json());

app.use(todoRoutes);
app.use("/", (req, res) => {
  res.json("Hello TS Rest");
});
const PORT = process.env.PORT || "4000";
app.listen(PORT, () => {
  connectDB();
  console.log("server is running on : " + PORT);
});
