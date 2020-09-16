function Button({ id, title }) {
  this.node = document.createElement('div');
  this.create = () => {
    this.node.innerHTML = `
      <button id='${id}'>${title}</button>
    `;
  };

  this.create();
}

export default ({ id, title }) => new Button({ id, title }).node;
