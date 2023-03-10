import db from "../db/db.js";
import { unflatten, uniqueId } from "../middleware/utility.js";

const saltRounds = 10;

//add function
const add = async (sqlQuery) => {
  const [result] = await db.query(sqlQuery);
  //const newResult = { ...result, uniqueId: menu.menuid };
  return result;
};

//find function
const find = async (objName) => {
  const sqlRecenic = `SELECT * FROM ${objName}`;
  const [rows] = await db.query(sqlRecenic);
  return rows;
};

//find by id function
const findById = async (objName, id) => {
  const [rows] = await db.query(`SELECT * FROM ${objName} WHERE id = ?`, [id]);
  return rows[0];
};

//update function
const update = async (sqlQuery) => {
  const [result] = await db.query(sqlQuery);
  return result[0];
};

//delete function
const remove = async (objName, id) => {
  try {
    const [result] = await db.query(`DELETE FROM ${objName} WHERE id = ?`, [id]);
    return result;
  } catch (err) {
    throw new Error(err);
  }
};

//find Item by id function
const findItem = async (objName, item, id) => {
  const sqlString = `SELECT ${item} FROM ${objName} WHERE id = ${id}`;
  const [rows] = await db.query(sqlString);
  return rows[0];
};

//find Item by id function
const setItem = async (objName, item, items) => {
  const value = typeof items.value === 'string' ? `"${items.value}"` : items.value;
  const sqlString = `UPDATE ${objName} set ${item} = ${value}  WHERE id = ${items.id}`;
  const [rows] = await db.query(sqlString);
  return rows[0];
};

export default {
  find,
  findById,
  add,
  update,
  remove,
  findItem,
  setItem,
};
