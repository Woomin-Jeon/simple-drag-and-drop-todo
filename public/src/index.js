import Input from './components/Input.js';
import Button from './components/Button.js';
import Todo from './components/Todo.js';

const $app = document.getElementById('app');

$app.appendChild(Input({ id: 'id_input', placeholder: '아이디를 입력해주세요' }));
$app.appendChild(Input({ id: 'password_input', placeholder: '비밀번호를 입력해주세요' }));
$app.appendChild(Button({ id: 'login_button', title: '로그인' }));

$app.appendChild(Todo());

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
