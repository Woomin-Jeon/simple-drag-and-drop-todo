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
export const updateRendering = () =>
  updator.reduce((previousPromise, currentPromise) =>
    previousPromise.then(() => currentPromise()), Promise.resolve());
