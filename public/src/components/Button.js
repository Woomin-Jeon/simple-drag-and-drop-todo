function Button({ id, title }, event) {
  this.node = document.createElement('div');
  this.node.addEventListener('click', event);
  this.render = () => {
    this.node.innerHTML = `
      <button id='${id}'>${title}</button>
    `;
  };
  

  this.render();
}

export default ({ id, title }, event) => new Button({ id, title }, event).node;
