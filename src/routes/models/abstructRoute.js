import express from "express";
import abstructController from "../../controllers/abstructController.js";
import { checkPermissions } from '../../security/interceptors.js'

const router = express.Router();

router.use("/", (req, res, next) => {
  const urlParts = req.url.split("/");
  req.objName2 = urlParts[1];

  if (req.objName == req.objName2) {
    router.use("/", (req, res, next) => {
      return res.status(403).send({ error: "Forbidden!!" });
      next();
    });
  } else {
    router.get("/", abstructController.getAll);
    router.get("/:id", abstructController.getById);
    router.post("/", checkPermissions("C"), abstructController.add);
    router.put("/", checkPermissions("U"), abstructController.update);
    router.delete("/:id", checkPermissions("D"), abstructController.remove);

    req.objItem = urlParts[2];
    router.get(`/get/${req.objItem}/:id`, abstructController.getItem);
    router.get(`/getid/${req.objItem}/:value`, abstructController.getIdByItem);
    //Mora se proslediti sledeci json za SETOVANJE *********** {"id": 1627113837566496768, "value": 1} *******    
    router.put(`/set/${req.objItem}`, checkPermissions("U"), abstructController.setItem);
  }
  next();
});

export default router;

/**  Da ne zaboravi kada kocu da se igram u samom ruteru, a da mi controler ne vraca RES
 * 
 router.get("/", async (req, res) => {
  const urlParts = req.url.split("/");
  const menu = urlParts[2];
  try {
    const items = await menuController.getAll(menu);
    res.status(200).json({ items });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

 * 
 */