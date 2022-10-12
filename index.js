import express from 'express';
import path from 'path';
import router from './src/router.js';
import detectedLanguage from "./src/middelwares/detectedLanguage.js";

const port = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use('/assets', express.static('src/assets'));

app.set('view engine', 'ejs');

app.use('/', detectedLanguage, router);
app.use('/:reqLang', detectedLanguage, router);

app.use((req, res) => {
  res.render(path.resolve('src/pages/404'));
});

app.listen(port, () => console.log('serveur lancer au port: ' + port));