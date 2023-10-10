const form = document.querySelector(".form");
const list = document.querySelector(".list");
const search = document.querySelector(".searchInput");

const createTodo = (todo) => {
  let html = `
  <li class="listItem">${todo}<i class='bx bxs-trash-alt delete'></i>
</li>`;

  list.innerHTML += html;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const todo = form.todoInput.value.trim();

  if (todo.length < 5 || todo.length > 40) {
    alert(
      "Each todo has to be more than 4 characters and less than 41 characters"
    );
    form.todoInput.value = "";
  } else {
    createTodo(todo);
    form.todoInput.value = "";
  }
});

list.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

const filterTodos = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

search.addEventListener("keyup", function (e) {
  e.preventDefault();

  const term = search.sInput.value.toLowerCase().trim();

  filterTodos(term);
});
