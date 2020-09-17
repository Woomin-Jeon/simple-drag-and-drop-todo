import LoginForm from './components/LoginForm.js';
import TodoMain from './components/TodoMain.js';

const app = document.getElementById('app');

app.appendChild(LoginForm());
app.appendChild(TodoMain());
