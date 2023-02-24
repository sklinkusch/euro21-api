const WM2022 = require("../data/worldcupmen/worldcup_m_2022");
const WM2018 = require("../data/worldcupmen/worldcup_m_2018");
const WM2014 = require("../data/worldcupmen/worldcup_m_2014");
const WM2010 = require("../data/worldcupmen/worldcup_m_2010");

function getWorldCupMenData(req, res) {
  const { year, lang } = req.query;
  switch (year) {
    case "2022":
      return res.status(200).json(WM2022(lang));
    case "2018":
      return res.status(200).json(WM2018(lang));
    case "2014":
      return res.status(200).json(WM2014(lang));
    case "2010":
      return res.status(200).json(WM2010(lang));
    default:
      return res
        .status(500)
        .json({ error: { message: "The data cannot be provided." } });
  }
}

module.exports = getWorldCupMenData;
