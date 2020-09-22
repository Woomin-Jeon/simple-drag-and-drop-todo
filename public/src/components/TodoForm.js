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
  
  this.render = () => {
    this.node.appendChild(Textarea({ id: `todo_input_${category}`, text: '', placeholder: 'Enter a note' }));
    this.node.appendChild(Button({ id: `todo_button_${category}`, title: 'Add', event: this.addButtonEvent }));
    this.node.appendChild(Button({ id: `todo_cancel_button_${category}`, title: 'Cancel', event: this.cancelButtonEvent }));
  };

  this.render();
}

const newTodoForm = ({ category }) => new TodoForm({ category }).node;

export default newTodoForm;
