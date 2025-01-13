import express from "express";
import cors from "cors";
const app = express();

app.use(cors());

app.use("/", (req, res) => {
  res.send("category service is running").end();
});

app.listen(3004, () => {
  console.log("category service running on port ${3000}");
});
