import path from "path";

const path_source = path.resolve("src");
const path_translates = path.join(path_source, "translates");
const path_pages = path.join(path_source, "pages");
const path_controllers = path.join(path_source, "controllers");

export {
  path_source, path_translates, path_pages, path_controllers
}