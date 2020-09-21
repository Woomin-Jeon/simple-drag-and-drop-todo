import Modal from './Modal.js';
import { modifyCategoryName } from '../apis/category.js';

function TitleEditModal({ category }) {
  this.node = document.createElement('div');

  this.titleEditEvent = async () => {
    const updatedTitle = document.querySelector(`#todo_container_title_edit_modal_${category}_textarea`).value;
    await modifyCategoryName(category, updatedTitle);
  };

  this.render = () => {
    this.node.appendChild(Modal({
      id: `todo_container_title_edit_modal_${category}`,
      title: `Edit Title`,
      text: category,
      event: this.titleEditEvent,
    }));
  };

  this.render();
}

const newTitleEditModal = ({ category }) => new TitleEditModal({ category }).node;

export default newTitleEditModal;
