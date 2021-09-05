import axios from "axios";
const baseUrl = "http://localhost:3001/notes/";

export const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export const createNew = async (text) => {
  const object = { text, completed: false };
  const response = await axios.post(baseUrl, object);
  return response.data;
};

export const toggleTodo = async (id, text, completed) => {
  if (!completed) {
    const res = { text: text, completed: true };
    await axios.put(baseUrl + id, res);
  } else {
    const res = { text: text, completed: false };
    await axios.put(baseUrl + id, res);
  }
};

export const deleteNote = async (id) => {
  await axios.delete(baseUrl + id);
};
