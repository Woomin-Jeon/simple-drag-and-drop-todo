import LoginForm from './components/LoginForm.js';
import TodoContainers from './components/TodoContainers.js';

const app = document.getElementById('app');

app.appendChild(LoginForm());
app.appendChild(TodoContainers());
