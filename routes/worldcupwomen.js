const WM2023 = require("../data/worldcupwomen/worldcup_f_2023");
const WM2019 = require("../data/worldcupwomen/worldcup_f_2019");
const WM2015 = require("../data/worldcupwomen/worldcup_f_2015");
const WM2011 = require("../data/worldcupwomen/worldcup_f_2011");
const WM2007 = require("../data/worldcupwomen/worldcup_f_2007");
const WM2003 = require("../data/worldcupwomen/worldcup_f_2003");

function getWorldCupWomenData(req, res) {
  const { year, lang } = req.query;
  switch (year) {
    case "2023":
      return res.status(200).json(WM2023(lang));
    case "2019":
      return res.status(200).json(WM2019(lang));
    case "2015":
      return res.status(200).json(WM2015(lang));
    case "2011":
      return res.status(200).json(WM2011(lang));
    case "2007":
      return res.status(200).json(WM2007(lang));
    case "2003":
      return res.status(200).json(WM2003(lang));
    default:
      return res
        .status(500)
        .json({ error: { message: "The data cannot be provided." } });
  }
}

module.exports = getWorldCupWomenData;
