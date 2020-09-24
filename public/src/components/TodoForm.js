import Textarea from './Textarea.js';
import Button from './Button.js';
import { updateRendering } from '../store.js';
import { addTodo } from '../apis/todo.js';

function TodoForm({ category }) {
  this.node = document.createElement('div');
  this.node.classList.add('hidden');

  this.addButtonEvent = async () => {
    await addTodo(this.textarea.value, category);
    await updateRendering();
  };

  this.cancelButtonEvent = () => {
    this.node.classList.add('hidden');
    this.textArea.value = '';
  };
  
  this.textAreaEvent = () => {
    if (this.textarea.value.trim().length === 0) {
      this.addButton.setAttribute('disabled', 'true');
      return;
    }

    this.addButton.removeAttribute('disabled');
  }

  this.textarea = Textarea({
    text: '',
    className: 'todo_input_textarea',
    placeholder: 'Enter a note',
    event: this.textAreaEvent.bind(this)
  });
  this.addButton = Button({
    className: 'todo_input_button_confirm',
    title: 'Add',
    event: this.addButtonEvent.bind(this),
    disabled: true,
  });
  this.cancelButton = Button({
    className: 'todo_input_button_cancel',
    title: 'Cancel',
    event: this.cancelButtonEvent.bind(this)
  });

  this.render = () => {
    this.node.appendChild(this.textarea);
    const child = document.createElement('div');
    this.node.appendChild(child);
    child.appendChild(this.addButton);
    child.appendChild(this.cancelButton);
  };

  this.render();
}

const newTodoForm = ({ category }) => new TodoForm({ category }).node;

export default newTodoForm;
