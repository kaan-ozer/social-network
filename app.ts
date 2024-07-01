import express from "express";
import feedRoutes from "./routes/feed";
import bodyParser from "body-parser";

const app: express.Application = express();

const port: number = 3002;

app.use(bodyParser.json());

app.use("/feed", feedRoutes);

app.get("/", (_req, _res) => {
  _res.send("ts with express");
});

app.listen(port, () => {
  console.log(`TS with Express http://localhost:${port}/`);
});
