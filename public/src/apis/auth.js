import axios from './customAxios.js';

export const signin = async (id, password) => {
  await axios.post('/auth/signin', { id, password });
};
