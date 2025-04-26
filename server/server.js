import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;
const corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
  res.json({ data: ["data", "data2", "data3"] });
});

app.listen(PORT, () => {
  console.log(`Server started om port ${PORT}`);
});
