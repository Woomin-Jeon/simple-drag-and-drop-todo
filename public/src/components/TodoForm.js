import Textarea from './Textarea.js';
import Button from './Button.js';
import { updateRendering } from '../store.js';
import { addTodo } from '../apis/todo.js';

function TodoForm({ category }) {
  this.node = document.createElement('div');
  this.node.classList.add('hidden');
  this.node.setAttribute('id', `todo_form_${category}`);

  this.addButtonEvent = async () => {
    const content = this.node.querySelector(`#todo_input_${category}`).value;
    await addTodo(content, category);
    await updateRendering();
  };

  this.cancelButtonEvent = () => {
    this.node.classList.add('hidden');
    const textArea = document.querySelector(`#todo_input_${category}`);
    textArea.value = '';
  };
  
  this.textAreaEvent = () => {
    const addButton = document.querySelector(`#todo_button_${category}`)
    const textArea = document.querySelector(`#todo_input_${category}`);
    
    if (textArea.value.trim().length === 0) {
      addButton.setAttribute('disabled', 'true');
      return;
    }

    addButton.removeAttribute('disabled');
  }

  this.render = () => {
    this.node.appendChild(Textarea({
      id: `todo_input_${category}`,
      text: '',
      className: 'todo_input_textarea',
      placeholder: 'Enter a note',
      event: this.textAreaEvent
    }));
    const child = document.createElement('div');
    this.node.appendChild(child);
    child.appendChild(Button({
      id: `todo_button_${category}`,
      className: 'todo_input_button_confirm',
      title: 'Add',
      event: this.addButtonEvent,
      disabled: true,
    }));
    child.appendChild(Button({
      id: `todo_cancel_button_${category}`,
      className: 'todo_input_button_cancel',
      title: 'Cancel',
      event: this.cancelButtonEvent
    }));
  };

  this.render();
}

const newTodoForm = ({ category }) => new TodoForm({ category }).node;

export default newTodoForm;
