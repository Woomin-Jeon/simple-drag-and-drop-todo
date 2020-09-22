function Button({ id, className, title, event, disabled }) {
  this.node = document.createElement('button');
  this.node.innerText = title;
  this.node.setAttribute('id', id);
  this.node.setAttribute('class', className);
  
  this.node.addEventListener('click', event);

  if (disabled) {
    this.node.setAttribute('disabled', 'true');
  }
}

const newButton = ({ id, className, title, event, disabled }) => new Button({ id, className, title, event, disabled }).node;

export default newButton;
