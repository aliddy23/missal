import express from "express";
import cors from "cors";
import history from "connect-history-api-fallback";

const app = express();

app.use(cors());
app.use(history());

app.use("/", express.static("dist"));

app.listen(2000);
