import axios from "axios";

const baseUrl = process.env.BASE_URL || "/api/todos/";

const makeUrl = (endpoint: string | string[] | number | number[]) => {
  return `${baseUrl}/${endpoint}`;
};

type Data = {
  id: number;
  todo: string;
  status: string;
};

/**
 * todosGET
 * 
 * Gets a list or single todo
 * 
 * @param id Optional Todo ID
 * @returns Todos
 */

const todosGET = async (id?: string | string[] | undefined) => {
  // * Check what method is passed to send fetch method
  if (id) {
    // * Defaults to getting single todo,
    try {
      const response = await axios.get(makeUrl(id));
      const data = await response["data"];
      data["data"] = [data["data"]]; // If only one item return as array
      return data;
    } catch (err) {
      return err;
    }
  } else {
    // * Defaults to all Todos
    try {
      const response = await axios.get(baseUrl);
      const data = await response["data"];
      return data;
    } catch (err) {
      console.error(err);
    }
  }
};

/**
 * todosPATCH 
 * 
 * Edits a todo entry
 * 
 * @param fields - the data to patch
 * @returns the changed todo entry
 */
const todosPATCH = async (fields: Data) => {
  try {
    const response = await axios.patch(makeUrl(fields.id), fields);
    const data = await response["data"];
    return data;
  } catch (err) {
    console.error(err);
  }
};

/**
 * todosPOST
 * 
 * Creates a new todo entry
 * 
 * @param fields - The todo fields to be created
 * @returns the created entry
 */

const todosPOST = async (fields: Data) => {
  try {
    const response = await axios.post(baseUrl, fields);
    const data = await response["data"];
    return data;
  } catch (err) {
    console.error(err);
  }
};

/**
 * todosDELETE
 * 
 * Deletes a todo entry
 * 
 * @param fields - the data of the todo entry
 * @returns A success menu
 */

const todosDELETE = async (fields: Data) => {
  try {
    const response = await axios.delete(makeUrl(fields.id));
    const data = await response["data"];
    return data;
  } catch (err) {
    console.error(err);
  }
};

export { todosGET, todosPATCH, todosPOST, todosDELETE };
