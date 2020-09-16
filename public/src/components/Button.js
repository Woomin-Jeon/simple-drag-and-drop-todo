function Button({ id, title }) {
  this.node = document.createElement('div');
  this.render = () => {
    this.node.innerHTML = `
      <button id='${id}'>${title}</button>
    `;
  };

  this.render();
}

export default ({ id, title }) => new Button({ id, title }).node;
