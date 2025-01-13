import express from "express";
import cors from "cors";
const app = express();

app.use(cors());

app.use("/", (req, res) => {
  res.send("users service is running").end();
});

app.listen(3008, () => {
  console.log("users service running on port ${3008}");
});
