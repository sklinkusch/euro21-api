const express = require("express");
const app = express();
const port = 3500;

const WM2022 = require("./data/worldcup_m_2022.json")

const useCors = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  next();
}

app.use((req, res, next) => useCors(req, res, next));

app.get("/worldcup", (req, res) => getWorldCupData(req, res));
// app.get("/euro", (req, res) => getEuroData(req, res));
app.get("*", (req, res) => wrongEndpoint(req, res));

app.listen(port, () => console.log(`Euro21-API listening on port ${port}...`));

function getWorldCupData(req, res) {
  const { year } = req.query;
  switch (year) {
    case "2022":
      return res.status(200).json(WM2022);
    default:
      return res.status(500).json({ error: { message: "The data cannot be provided." }});
  }
}