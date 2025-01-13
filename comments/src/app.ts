import express from "express";
import cors from "cors";
const app = express();

app.use(cors());

app.use("/", (req, res) => {
  res.send("comments service is running").end();
});

app.listen(3005, () => {
  console.log("comments service running on port ${3005}");
});
