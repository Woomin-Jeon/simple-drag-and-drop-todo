function Button({ id, className, title }, event) {
  this.node = document.createElement('div');
  
  this.node.addEventListener('click', event);
  
  this.render = () => {
    this.node.innerHTML = `
      <button id='${id}' class='${className}'>${title}</button>
    `;
  };
  
  this.render();
}

const newButton = ({ id, className, title }, event) => new Button({ id, className, title }, event).node;

export default newButton;
