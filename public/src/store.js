import axios from './apis/customAxios.js';

export const store = {
  todos: []
};

export const action = {
  async updateTodos(todos) {
    store.todos = await axios.get('/todo');
  }
};

export const updator = [action.updateTodos];
export const updateRendering = () => {
  return updator.reduce((previousPromise, currentPromise) => {
    return previousPromise.then(() => currentPromise());
  }, Promise.resolve());
};
