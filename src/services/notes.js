import axios from "axios";
const baseUrl = "http://localhost:3001/notes";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNew = async (text) => {
  const object = { text, completed: false };
  const response = await axios.post(baseUrl, object);
  return response.data;
};

const toggleTodo = async (id) => {
  const object = { id, completed: true };
  const response = await axios.put(baseUrl, object);
};

const deleteNote = async (id) => {
  const response = await axios.delete(baseUrl + id);
  return response.filter((e) => {
    return e.id !== id;
  });
};

export default { getAll, createNew, deleteNote, toggleTodo };
