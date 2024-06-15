const EM2024 = require("../data/euromen/euro_m_2024");

function getEuroMenData(req, res) {
  const { year, lang } = req.query;
  switch (year) {
    case "2024":
      return res.status(200).json(EM2024(lang));
    default:
      return res
        .status(500)
        .json({ error: { message: "The data cannot be provided." } });
  }
}

module.exports = getEuroMenData;
