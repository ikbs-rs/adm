import abstructHelper from "./abstructHelper.js";
import userModel from "../models/User.js";
import { getToken } from "../security/jwt/tokenJWT.js";
import blacklistTokenModel from "../models/Blacklist_token.js";

const checkUser = async (username, password) => {
  const user = await userModel.findByUsername(username);
  if (!user) {
    throw new Error("Korisnik nije pronađen");
  }
  console.log("*0.0.1******************userHelper.checkUser************************", user, "=======", password)
  // const match = await bcrypt.compare(password, user.password);
  // if (!match) {
  //   throw new Error("Pogrešna lozinka");
  // }
  return user;
};

const findUserChanel = async (userId) => {
  const chanel = await userModel.findUserChanel(userId);
  console.log("*0.0.0******************userHelper.findUserChanel************************", user, "=======", chanel)
  return user;
};

const signup = async (objData, lang) => {
<<<<<<< HEAD
  try {
    console.log("**0******************userHelper.Signup************************", objData)
    const objName = "adm_user";
    // Provera da li postoji mail
    const userMail = await abstructHelper.getIdByItem(
      objName,
      "mail",
      objData.mail
    );
    console.log("**1******************userHelper.Signup************************", userMail)
    if (userMail) {
      console.log("**1.1******************userHelper.Signup************************", userMail)
      throw new Error(`Korisnik sa mejlom ${objData.mail} postoji!`);
=======
    try {
      console.log("**0******************userHelper.Signup************************", objData)
      const objName = "adm_user";
      // Provera da li postoji mail
      const userMail = await abstructHelper.getIdByItem(
        objName,
        "mail",
        objData.mail
      );
      console.log("**1******************userHelper.Signup************************", userMail)
      if (userMail) {
        console.log("**1.1******************userHelper.Signup************************", userMail)
        throw new Error(`Korisnik sa mejlom ${objData.mail} postoji!`);
      }

      // Provera da li postoji username
      const userId = await abstructHelper.getIdByItem(
        objName,
        "username",
        objData.username
      );
      if (userId) {
        throw new Error(`Korisnik sa nalogom ${objData.username} postoji!`);
      }
      // Add the user
      console.log("**2************************userHelper.Signup**********************************", objData.username)
      const result = await abstructHelper.signup(objName, objData, lang);
      return result;
    } catch (err) {
      throw new Error(`Greška pri registraciji korisnika uH_singup: ${err.message}`);
>>>>>>> 660dc3afd468931c33c33613c049c4490791e0c7
    }

<<<<<<< HEAD
    // Provera da li postoji username
    const userId = await abstructHelper.getIdByItem(
      objName,
      "username",
      objData.username
    );
    if (userId) {
      throw new Error(`Korisnik sa nalogom ${objData.username} postoji!`);
    }
    // Add the user
    console.log("**2.0************************userHelper.Signup**********************************", objData.username)
    const result = await abstructHelper.signup(objName, objData, lang);
    return result;
  } catch (err) {
    throw new Error(`Greška pri registraciji korisnika uH_singup: ${err.message}`);
  }
=======
const signin = async (objData) => {
    // try {
      console.log("*********************0*****signinH**********************************", objData.username)
        const objName = "adm_user";
        const userId = await abstructHelper.getIdByItem(objName, "mail", objData.username);
        console.log("*********************1*****signinH**********************************", userId)
        const result = await getToken(userId.id, objData.username);
        console.log(userId, "********************2******signinH**********************************", result)
        return result;
    // } catch (err) {
    //     throw new Error(`Greška pri logovanju korisnika uH_singin: ${err.message}`);
    // }
>>>>>>> 660dc3afd468931c33c33613c049c4490791e0c7
};

const signin = async (objData) => {
  // try {

  const objName = "adm_user";
  const userId = await abstructHelper.getIdByItem(objName, "mail", objData.username);
  // provera lozinke 
  console.log("*0.0********************Helper*****signin**********************************")
  const userObj = await checkUser(objData.username, objData.password)
  console.log("*0.0********************Helper*****signin**********************************", objData, "===", userObj)
  //  treba dovuci dodeljne kanale
  const channels = await userModel.findUserChanel(userId.id);

  console.log("*0.1********************Helper*****signin**********************************", userId, "===", channels)
  const result = await getToken(userId.id, objData.username, userObj.admin, channels);
  console.log(userId, "*0.2********************Helper*****signin**********************************", result)
  return result;
  // } catch (err) {
  //     throw new Error(`Greška pri logovanju korisnika uH_singin: ${err.message}`);
  // }
};
const signout = async (authorization) => {
  try {
    const token = authorization.split(" ")[1];
    const result = await blacklistTokenModel.insertToken(token);
    return result;
  } catch (err) {
    throw new Error(`Greška pri odjavi korisnika uH_singout: ${err.message}`);
  }
};

export default {
  checkUser,
  findUserChanel,
  signup,
  signin,
  signout,
};
