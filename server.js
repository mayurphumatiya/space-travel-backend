import express from "express";
import mongoose from "mongoose";
import config from "config";
import userRouter from "./routes/userRoutes";
import ticketRouter from "./routes/ticketRoutes";
import authRouter from "./routes/authRoutes";
import cors from "cors";
import destinationRouter from "./routes/destinationRoutes";
import bodyParser from "body-parser";
const app = express();



//this code provide memory for save user images in database
app.use(bodyParser.json({ limit: "7mb" }));
app.use(
  bodyParser.urlencoded({ limit: "7mb", extended: true, parameterLimit: 7000 })
);

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
app.use("/ticket", ticketRouter);
app.use("/destination", destinationRouter);

mongoose
  .connect(`mongodb+srv://admin:${dbConfig}@cluster0.7lmpgrb.mongodb.net/test`)
  .then(() =>
    app.listen(port, () => {
      console.log(`Connected to Database & Server is running`);
    })
  )
  .catch((e) => console.log(e));
