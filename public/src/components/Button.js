function Button({ className, title, event, disabled }) {
  this.node = document.createElement('button');
  this.node.innerText = title;
  this.node.classList.add(className);
  
  this.node.addEventListener('click', event);

  if (disabled) {
    this.node.setAttribute('disabled', 'true');
  }
}

const newButton = ({ className, title, event, disabled }) => new Button({ className, title, event, disabled }).node;

export default newButton;
