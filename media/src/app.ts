import express from "express";
import cors from "cors";
const app = express();

app.use(cors());

app.use("/", (req, res) => {
  res.send("media service is running").end();
});

app.listen(3003, () => {
  console.log("media service running on port ${3000}");
});
