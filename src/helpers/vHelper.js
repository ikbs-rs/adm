import vModel from "../models/vModel.js";

const saltRounds = 10;


const getLista = async (objName, stm, objId, id, lang) => {
  try {
    console.log("Dosao u Helper V ", stm)
    let result = {};
    switch (stm) {
      case "adm_userchannel_v":
        result = await vModel.getUserChannelV(objName, objId, lang);
        break;
      default:
        console.error("Pogresan naziv za view");
    }
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getListaById = async (objName, stm, item, objId, lang) => {
  try {
    switch (stm) {
      case "cmn_objpar_v":
        var result = await vModel.getCmnObjparV(objName, objId, lang);
        break;
      default:
        console.error(`Pogresan naziv za view ${stm}`);
    }
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getListaByText = async (objName, stm, item, objId, lang) => {
  try {
    switch (stm) {
      case "cmn_locbytxt_v":
        var result = await vModel.getCmnLocByTxtV(
          objName,
          stm,
          item,
          objId,
          lang
        );
        break;
      case "cmn_obj_tp_v":
        var result = await vModel.getCmnObjByTxtV(
          objName,
          stm,
          item,
          objId,
          lang
        );
        break;
      case "cmn_par_tp_v":
        var result = await vModel.getCmnParByTxtV(
          objName,
          stm,
          item,
          objId,
          lang
        );
        break;
      default:
        console.error("Pogresan naziv za view");
    }
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getListaByNum = async (objName, stm, item, objId, lang) => {
  try {
    switch (stm) {
      case "tic_docbynum_v":
        var result = await vModel.getCmnLocByTxtV(
          objName,
          stm,
          item,
          objId,
          lang
        );
        break;
      default:
        console.error("Pogresan naziv za view, getListaByNum");
    }
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default {
  getLista,
  getListaById,
  getListaByText,
};
