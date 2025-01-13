import express from "express";
import cors from "cors";
const app = express();

app.use(cors());

app.use("/", (req, res) => {
  res.send("post service is running").end();
});
app.listen(3002, () => {
  console.log("post service running on port ${3000}");
});
