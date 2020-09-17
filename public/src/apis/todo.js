import axios from './customAxios.js';

export const addTodo = async (content) => {
  await axios.post('/todo', { content });
};

export const deleteTodo = async (todoId) => {
  await axios.post('/todo/delete', { todoId });
};
