import express from "express";
import cors from "cors";
const app = express();

app.use(cors());

app.use("/", (req, res) => {
  res.send("tags service is running").end();
});

app.listen(3007, () => {
  console.log("tags service running on port ${3006}");
});
