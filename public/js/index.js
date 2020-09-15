const $app = document.getElementById('app');

$app.innerHTML = `
  <input id='id_input' type='text' />
  <input id='password_input' type='text' />
  <button id='login_button' type='button'>로그인</button>
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
  const data = await response.json();

  const $user = document.getElementById('user');

  $user.innerHTML = `${data.message}`;
});
