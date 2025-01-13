import express from "express";
import cors from "cors";
const app = express();

app.use(cors());

app.use("/", (req, res) => {
  res.send("reactions service is running").end();
});

app.listen(3006, () => {
  console.log("reactions service running on port ${3006}");
});
