import express, { urlencoded } from "express";
import { connect } from "mongoose";
import path from "path";

import { env } from "./env.config";
import { errorHandle } from "./handler/error.handler";

import { useRouter } from "./routes/router";

const app = express();

const viewsPath = path.join(__dirname, "..", "src", "views"); // ✅ Correct path

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", viewsPath);

app.use(errorHandle);

app.use("/", useRouter);

// Database Connection
connect(env.DATABASE_URL).then(() => console.log(`connected to DataBase...`));

// Server
app.listen(env.PORT, () =>
  console.log(`Server is running on port ${env.PORT}`),
);