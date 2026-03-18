const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

addBtn.addEventListener('click', addTodo);

input.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') addTodo();
});

function addTodo() {
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement('li');
  li.textContent = text;

  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  const delBtn = document.createElement('button');
  delBtn.textContent = 'X';
  delBtn.classList.add('delete-btn');

  delBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    li.remove();
  });

  li.appendChild(delBtn);
  list.appendChild(li);

  input.value = '';
}
