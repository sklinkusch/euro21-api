const WM2022 = require("../data/worldcupmen/worldcup_m_2022");
const WM2018 = require("../data/worldcupmen/worldcup_m_2018");
const WM2014 = require("../data/worldcupmen/worldcup_m_2014");
const WM2010 = require("../data/worldcupmen/worldcup_m_2010");
const WM2006 = require("../data/worldcupmen/worldcup_m_2006");
const WM2002 = require("../data/worldcupmen/worldcup_m_2002");
const WM1998 = require("../data/worldcupmen/worldcup_m_1998");
const WM1994 = require("../data/worldcupmen/worldcup_m_1994");
const WM1990 = require("../data/worldcupmen/worldcup_m_1990");

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
    case "2006":
      return res.status(200).json(WM2006(lang));
    case "2002":
      return res.status(200).json(WM2002(lang));
    case "1998":
      return res.status(200).json(WM1998(lang));
    case "1994":
      return res.status(200).json(WM1994(lang));
    case "1990":
      return res.status(200).json(WM1990(lang));
    default:
      return res
        .status(500)
        .json({ error: { message: "The data cannot be provided." } });
  }
}

module.exports = getWorldCupMenData;
