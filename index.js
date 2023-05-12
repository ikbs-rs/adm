import express  from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import router from './src/routes/indexRoute.js' 

const app = express()
dotenv.config()
app.use(cors())

app.use((req, res, next) => { 
  // console.log("******************************************************1*****************************************************************")
  // console.log(req.body)
  // console.log(req.headers)
  // console.log("*******************************************************2****************************************************************")
  next();
});
app.use('/',router) // Treba prepraviti '/' route, npr. /ticketlines/api

const appPort = process.env.APP_PORT 
app.listen(appPort||3000, () => {
  console.log(`Server je pokrenut na adresi ${appPort}`)
})