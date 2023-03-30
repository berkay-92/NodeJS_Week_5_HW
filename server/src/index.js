import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";

import "./common/sequelize.js";
import postsRouter from "./routes/postsRoute.js";
import usersRouter from "./routes/userRoute.js";
import commentsRouter from "./routes/commentRoute.js";

const app = express();
const port = 8000;
app.use(cors());
app.use(morgan("tiny"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use("/api/v1/posts", postsRouter);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/comments", commentsRouter);

app.listen(port, () => {
  console.log("App is running!!!");
});
