import TodoForm from './components/TodoForm.js';
import TodoResult from './components/TodoResult.js';
import LoginForm from './components/LoginForm.js';

const app = document.getElementById('app');

app.appendChild(LoginForm());
app.appendChild(TodoForm());
app.appendChild(TodoResult());
