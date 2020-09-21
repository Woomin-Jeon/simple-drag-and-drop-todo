import axios from './customAxios.js';

export const modifyCategoryName = async (category, newCategory) => {
  await axios.post('/category', { category, newCategory });
};
