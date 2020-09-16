const $app = document.getElementById('app');
$app.innerHTML = `
  <input id='id_input' type='text' />
  <input id='password_input' type='text' />
  <button id='login_button' type='button'>로그인</button>
  <br/>
  <input id='todo_input' type='text' />
  <button id='todo_button' type='button'>입력</button>
`;

const $login_button = document.getElementById('login_button');
$login_button.addEventListener('click', async () => {
  const id = document.getElementById('id_input').value;
  const password = document.getElementById('password_input').value;

  const response = await fetch('http://localhost:3000/auth/signin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, password }),
  });
});

const $todo_button = document.getElementById('todo_button');
$todo_button.addEventListener('click', async () => {
  const content = document.getElementById('todo_input').value;

  const response = await fetch('http://localhost:3000/todo', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content }),
  });

  const $contents = document.getElementById('contents');

  const data = await fetch('http://localhost:3000/todo');
  const todos = await data.json();

  $contents.innerHTML = `
    <div id='todos'>
      ${todos.map(todo => `<div>${todo.content}</div>`).join('')}
    </div>
  `;
});
