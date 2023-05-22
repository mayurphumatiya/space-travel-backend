import express from "express";
import mongoose from "mongoose";
import config from "config";
import userRouter from "./routes/userRoutes";
import authRouter from "./routes/authRoutes";
import cors from "cors";
const app = express();

const dbConfig = config.get("Database.dbPass");

const port = config.get("port");
app.use(cors());
app.use(express.json());
// middlewares

app.get("/", (req, res) => {
  res.status(200).send("Hello server is running!").end();
});
app.use("/user", userRouter);
app.use("/auth", authRouter);

mongoose
  .connect(`mongodb+srv://admin:${dbConfig}@cluster0.7lmpgrb.mongodb.net/test`)
  .then(() =>
    app.listen(port, () => {
      console.log(`Connected to Database & Server is running`);
    })
  )
  .catch((e) => console.log(e));
