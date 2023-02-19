const locales = require("./locales.json");

exports.localeName = (code, lang) => {
  if(code && typeof code === "string" && code != null && code !== "?") {
    if (/^de/.test(lang)) {
      return locales.de[code]
    } else if (/^es/.test(lang)) {
      return locales.es[code]
    } else if (/^fr/.test(lang)) {
      return locales.fr[code]
    } else if (/^it/.test(lang)) {
      return locales.it[code]
    } else if (/^pl/.test(lang)) {
      return locales.pl[code]
    } else if (/^pt/.test(lang)) {
      return locales.pt[code]
    } else {
      return locales.en[code]
    }
  }
  return ""
}