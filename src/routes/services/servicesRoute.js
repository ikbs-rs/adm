import express, { request, response } from "express";
import { checkPermissionsEx } from '../../security/interceptors.js'
import { decodeJWT } from '../../security/jwt/tokenJWT.js'

const router = express.Router();

router.post('/checkPermissions', async (req, res, next) => {
  console.log("*******checkPermissions********")
  return await checkPermissionsEx(req, res, next);
}); 

router.post('/checkJwt', async (req, res, next) => {
  console.log("*******checkJwtRout********", { success: true, userId: req.userId, message: "OK", decodeJwt: req.decodeJwt})
  return res.status(200).json({ success: true, userId: req.userId, message: "OK", decodeJwt: req.decodeJwt});
}); 
router.post('/decodeJwt', async (req, res, next) => {
  return decodeJWT(req, res, next);
}); 

export default router;  