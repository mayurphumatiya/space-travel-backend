import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes"
import authRouter from "./routes/authRoutes";
import cors from "cors"
dotenv.config();
const app = express();

const port = 5000;
app.use(cors())
app.use(express.json())
// middlewares
app.use("/", (req, res)=>{
  res.send("Hello Servers!");
})
app.use("/user", userRouter);
app.use("/auth", authRouter);


mongoose
  .connect(
    `mongodb+srv://admin:OFCuU4hGQbPPCley@cluster0.7lmpgrb.mongodb.net/test`
  )
  .then(() =>
    app.listen(port, () => {
      console.log(`Connected to Database & Server is running`);
    })
  )
  .catch((e) => console.log(e));
