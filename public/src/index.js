import LoginForm from './components/LoginForm.js';
import TodoContainer from './components/TodoContainer.js';

const app = document.getElementById('app');

app.appendChild(LoginForm());
app.appendChild(TodoContainer());
