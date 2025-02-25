import express  from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import router from './src/routes/indexRoute.js' 
import fs from 'fs';
import forceHttps from 'express-force-https';
import  http  from 'http';
import https from 'https';

const app = express()
app.use(cors());

dotenv.config()
app.use((req, res, next) => { 
  // console.log("*******webDomen**********", webDomen)
  next();
});
const httpPort = process.env.APP_PORT || 80; // HTTP port
const httpsPort = process.env.HTTPS_PORT || 443; // HTTPS port
const sslDir = process.env.SSL_DIR
const rootDir = process.env.ROOT_DIR
const webDomen = process.env.WEB_DOMEN

// Učitavanje SSL/TLS sertifikata i privatnog ključa
const privateKey = fs.readFileSync(`${sslDir}localhost.key`, 'utf8');
const certificate = fs.readFileSync(`${sslDir}localhost.crt`, 'utf8');
const credentials = { key: privateKey, cert: certificate };

 //Dodajte middleware za omogućavanje CORS
 app.use((req, res, next) => {
  // console.log("*******webDomen**********", webDomen)
  const allowedOrigins = [webDomen, '*.ems.local'];
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }  
  //res.setHeader('Access-Control-Allow-Origin', `${webDomen}`);
  next();
});

app.use((req, res, next) => { 
  next();
});

//app.use(forceHttps); // Osiguranje da zahtevi budu preusmereni na HTTPS

app.use(`/${rootDir}/`,router) 

// Kreiranje HTTP servera
const httpServer = http.createServer(app);

// Kreiranje HTTPS servera
const httpsServer = https.createServer(credentials, app);



httpServer.listen(httpPort, () => {
  console.log(`HTTP Server je pokrenut na adresi ${webDomen}  ${rootDir} : ${httpPort}`);
});

httpsServer.listen(httpsPort, () => {
  console.log(`HTTPS Server je pokrenut na adresi ${webDomen}  ${rootDir} : ${httpsPort}`);
});

// const appPort = process.env.APP_PORT 
// app.listen(appPort||3000, () => {
//   console.log(`Server je pokrenut na adresi ${appPort}`)
// })