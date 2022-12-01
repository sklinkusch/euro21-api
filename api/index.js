const express = require("express");
const cors = require("cors");
const app = express();
// const port = 3000;

const WM2022 = require("../data/worldcup_m_2022.json")

const corsOptions = {
  console.log("entering corsOptions")
  origin: function(origin, callback) {
    callback(null, true);
  }
};

app.use(cors(corsOptions));
app.use(() => {
  console.log("incoming request")
})

app.get("/worldcup", (req, res) => getWorldCupData(req, res));
// app.get("/euro", (req, res) => getEuroData(req, res));
app.get("*", (req, res) => wrongEndpoint(req, res));

// app.listen(port, () => console.log(`Euro21-API listening on port ${port}...`));

function getWorldCupData(req, res) {
  console.log("entering world cup function")
  const { year } = req.query;
  console.log(`given year: ${year}`)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.setHeader('Content-Type', 'application/json');
  switch (year) {
    case "2022":
      console.log(WM2022)
      return res.json(WM2022);
    default:
      console.error("The data cannot be provided.")
      return res.status(500).json({ error: { message: "The data cannot be provided." }});
  }
}

module.exports = app;