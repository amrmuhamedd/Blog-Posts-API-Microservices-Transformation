import express from "express";
import cors from "cors";
const app = express();

app.use(cors());

app.use("/", (req, res) => {
  res.send("audit service is running").end();
});

app.listen(3009, () => {
  console.log("audit service running on port ${3009}");
});
