import axios from "axios";
import jwt from "jsonwebtoken";
import jwtConfig from "../config/jwtConfig.js";
import roll from "./guards/roll.js"

// funkcija za proveru ispravnosti JWT tokena za postojeci modul ADM.
export const checkJwt = async (req, res, next) => {  
  try {
    console.log('checkJwt====================================')
    const jwtServer = process.env.JWT_URL;
    const token = req.headers.authorization?.replace("Bearer ", "");
    if (!jwtServer) {
      throw new Error(
        "Adresa udaljenog servera nije definisana u .env datoteci."
      );
    } else {
      if (jwtServer === "LOCAL") {
        jwt.verify(token, jwtConfig.secret, (err, decoded) => {  
          if (err) return res.status(401).json({ error: "Token invalid" });
          req.userId = decoded.userId
          req.decodeJwt = decoded
          next();
        });
      } else {
        const checkJwtUrl = `${jwtServer}/checkJwt`;
        const res = await axios.post(`${checkJwtUrl}`, {}, {
          headers: { Authorization: `Bearer ${token}` },
          timeout: 5000, // vreme za koje se očekuje odgovor od udaljenog servera (u milisekundama)
        });
        // provera statusa odgovora
        if (response.status === 200 && response.data.success) {
          // ako je JWT token ispravan, prelazimo na sledeći middleware
          next();
        } else {
          // ako nije ispravan, vraćamo poruku o grešci
          return res
            .status(401)
            .json({ message: "Niste autorizovani za pristup ovom resursu." });
        }
      }
    }
  } catch (error) {
    // u slučaju greške, vraćamo objekat sa informacijama o grešci
    return res.status(error.response?.status || 500).json({
      message: error.message || "Internal Server Error",
      data: error.response?.data || {},
    });
  }
};

// Middleware funkcija za proveru prava, sa default parametrima
export const checkPermissions = (par1 = "1", par2 = "1") => {
  return async (req, res, next) => {
    console.log("Check Permissions", req.userId)
    next() /*
    try {
      // Dohvatam objekat i korisnika i prosledjujem dalje
      const objName = req.objName;
      const userId = req.userId;
      // Proveru prava korisnika dalje obavlja obicna funkcija
      if (await roll.proveraDozvola(userId, objName, par1, par2)) {
        next();
      } else {
        return res
          .status(401)
          .json({ message: "Nemate pravo pristupa ovom resursu - roll." });
      }
    } catch (error) {
      // u slučaju greške, vraćamo objekat sa informacijama o grešci
      return res.status(error.response?.status || 500).json({
        message: error.message || "Internal  Server Error - roll",
        data: error.response?.data || {},
      });
    }
    */
  };
};

export const checkPermissionsEx = async (req, res, next) => {
  //try {
    // Dohvatam objekat i korisnika i prosledjujem dalje
    console.log("loooooocheckPermissionsEx*-*-*-*-*-*-*-**-*-*!!!!")
    const userId = req.userId;
    const objName = req.body.objName;
    const par1 = req.body.par1 || 1;
    const par2 = req.body.par2 || 1;
    // Proveru prava korisnika dalje obavlja obicna funkcija
    if (await roll.proveraDozvola(userId, objName, par1, par2)) {
      return res
        .status(200)
        .json({ allowed: true, message: `Imate prava na resurs ${objName}` });
    } else {
      return res
        .status(401)
        .json({ message: "Nemate pravo pristupa ovom resursu - roll." });
    }
  // } catch (error) {
  //   // u slučaju greške, vraćamo objekat sa informacijama o grešci
  //   return res.status(error.response?.status || 500).json({
  //     message: error.message || "Internal  Server Error - roll",
  //     data: error.response?.data || {},
  //   });
  // }
};
