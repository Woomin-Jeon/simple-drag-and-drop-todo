import axios from './customAxios.js';

export const signin = async (id, password) => {
  const response = await axios.post('/auth/signin', { id, password });
  return response;
};
