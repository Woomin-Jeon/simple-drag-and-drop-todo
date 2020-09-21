import axios from './customAxios.js';

export const addTodo = async (content, category) => {
  await axios.post('/todo', { content, category });
};

export const deleteTodo = async (todoId) => {
  await axios.post('/todo/delete', { todoId });
};

export const updateTodo = async (todoId, content) => {
  await axios.post('/todo/update', { todoId, content });
};

export const moveTodo = async (todoId, category) => {
  await axios.post('/todo/move', { todoId, category });
};
