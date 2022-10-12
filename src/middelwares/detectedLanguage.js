export default (req, res, next) => {
  let lang = "fr";
  const langs = ["fr", "en"];

  if (req.params.reqLang) {
    const index = langs.findIndex((val) => {
      return req.params.reqLang == val;
    })

    if (index >= 0) {
      lang = langs[index];
    }
  }

  req.reqLang = lang;

  next();
}