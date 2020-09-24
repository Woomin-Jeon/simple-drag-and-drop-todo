import axios from './apis/customAxios.js';
import dom from './domHelper.js';

export const store = {
  todos: [],
  categories: [],
  currentModal: null,
  dragTarget: null,
};

export const action = {
  async updateTodos(todos) {
    store.todos = await axios.get('/todo');
  },
  async updateCategory() {
    const data = await axios.get('/category');
    store.categories = [...data.categories];
  },
  setTargetModal(modal) {
    store.currentModal = modal;
  },
  setDragTarget(dom) {
    store.dragTarget = dom;
  }
};

export const util = {
  openModal() {
    [store.currentModal, dom.overlay].forEach(element => element.classList.remove('hidden'));
  },
  closeModal() {
    [store.currentModal, dom.overlay].forEach(element => element.classList.add('hidden'));
  }
}

export const updator = [action.updateCategory, action.updateTodos];
export const updateRendering = () =>
  updator.reduce((previousPromise, currentPromise) =>
    previousPromise.then(() => currentPromise()), Promise.resolve());
