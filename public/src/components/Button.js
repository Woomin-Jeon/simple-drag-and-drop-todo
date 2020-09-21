function Button({ id, className, title, event }) {
  this.node = document.createElement('button');
  this.node.innerText = title;
  this.node.setAttribute('id', id);
  this.node.setAttribute('class', className);
  
  this.node.addEventListener('click', event);
}

const newButton = ({ id, className, title, event }) => new Button({ id, className, title, event }).node;

export default newButton;
