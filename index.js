const express = require("express");
const app = express();
const port = 3500;

const getWorldCupMenData = require("./routes/worldcupmen");
const getWorldCupWomenData = require("./routes/worldcupwomen");

const useCors = (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  next();
};

const wrongEndpoint = (req, res) => {
  return res
    .status(404)
    .json({ error: { message: "This endpoint does not exist." } });
};

app.use((req, res, next) => useCors(req, res, next));

app.get("/worldcupmen", (req, res) => getWorldCupMenData(req, res));
app.get("/worldcupwomen", (req, res) => getWorldCupWomenData(req, res));
// app.get("/euro", (req, res) => getEuroData(req, res));
app.get("*", (req, res) => wrongEndpoint(req, res));

app.listen(port, () => console.log(`Euro21-API listening on port ${port}...`));
