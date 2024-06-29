import express from "express";

const app: express.Application = express();

const port: number = 3002;

app.get("/", (_req, _res) => {
  _res.send("ts with express");
});

app.listen(port, () => {
  console.log(`TS with Express http://localhost:${port}/`);
});
