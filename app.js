import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { config } from "dotenv";
config();
import UserRoute from "./routes/UserRoute.js";
import morgan from "morgan";
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173", //
    credentials: true,
    HttpOnly: true,
  })
);

app.use(morgan("dev"));

// app.get("/", (req, res) => {
//   return res.status(200).send({
//     success: true,
//     message: "Hello user you talk to a Server",
//   });
// });

app.use("/api/v1", UserRoute);

app.use("*", (req, res) => {
  res.status(404).send("Opps!! Page Not Found");
});

export default app;
