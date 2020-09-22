import axios from './apis/customAxios.js';

export const store = {
  todos: [],
  categories: []
};

export const action = {
  async updateTodos(todos) {
    store.todos = await axios.get('/todo');
  },
  async updateCategory() {
    const data = await axios.get('/category');
    store.categories = [...data.categories];
  }
};

export const updator = [action.updateCategory, action.updateTodos];
export const updateRendering = () =>
  updator.reduce((previousPromise, currentPromise) =>
    previousPromise.then(() => currentPromise()), Promise.resolve());

export const modals = [];
export const closeModals = () => modals.forEach(dom => dom.classList.add('hidden'));
