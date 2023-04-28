import { getRollPermissions } from "../../helpers/RollAct.js";
import { checkUserPermissions } from "../../helpers/Userpermiss.js";

// funkcija za proveru dozvola korisnika
export const proveraDozvola = async (userId, objName, par1, par2) => {
    try {
      let OK = false;
      let role = [];
      // Dohvatam prvo sve role dodeljene toj akciji i tim pravima CRUDX
      const rollPermission = await getRollPermissions(objName, par1, par2);
      if (rollPermission) {
        OK = true;
        role = rollPermission;
      }
      if (OK) {
        // Ako postoji rola onda se proverava da li je data trenutnom korisniku
        const userPermission = await checkUserPermissions(userId, role);
        if (userPermission) {
          return true;          
        } else {
            return false;
        }
      } else {
        return false;
      }
    } catch (error) {
      throw new Error(`Sistemska greska prilikom provere dozvola -roll: ${error.message}`);
    }
  };
