import express from "express";

const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
  return res.send("Welcome");
});

app.get("/about", (req, res) => {
  return res.json({ message: "About Page" });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
