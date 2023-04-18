import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes"
import authRouter from "./routes/authRoutes";
dotenv.config();
const app = express();

const port = 5000;
app.use(express.json())
// middlewares
app.use("/user", userRouter);
app.use("/auth", authRouter);


mongoose
  .connect(
    `mongodb+srv://admin:${process.env.MONGO_DB_PASSWORD}@cluster0.7lmpgrb.mongodb.net/test`
  )
  .then(() =>
    app.listen(port, () => {
      console.log(`Connected to Database & Server is running`);
    })
  )
  .catch((e) => console.log(e));
