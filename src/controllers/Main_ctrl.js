import { path_pages, path_translates } from "../configs/consts.js";
import path from "path";
import fs from "fs";
    
export default class {
  static async home (req, res) {
    const lang = req.reqLang;
    let d = JSON.parse(fs.readFileSync(path.join(path_translates, lang, "index.json"), "utf8"));

    res.render(path.join(path_pages, "home"), {title: "BYT3LAB", lang: lang, t: d});
  }

  static async contact (req, res) {
    const lang = req.reqLang;
    let d = JSON.parse(fs.readFileSync(path.join(path_translates, lang, "index.json"), "utf8"));

    res.render(path.join(path_pages, "contact"), {title: "BYT3LAB - contact", lang: lang, t: d});
  }

  static async service (req, res) {
    const lang = req.reqLang;
    let d = JSON.parse(fs.readFileSync(path.join(path_translates, lang, "index.json"), "utf8"));

    res.render(path.join(path_pages, "service"), {title: "BYT3LAB - service", lang: lang, t: d});
  }

  static async product (req, res) {
    const lang = req.reqLang;
    let d = JSON.parse(fs.readFileSync(path.join(path_translates, lang, "index.json"), "utf8"));

    res.render(path.join(path_pages, "product"), {title: "BYT3LAB - product", lang: lang, t: d});
  }
}