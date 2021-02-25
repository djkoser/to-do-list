const addTodo = (evt) => {

  evt.preventDefault();
  const newItem = document.createElement("li");
  const formEntry = document.getElementById("item");
  newItem.innerText = formEntry.value;
  formEntry.value=""
  newItem.addEventListener("click", completeTodo);
  
  document.querySelector("ul").appendChild(newItem)

  

  const deleteButton = document.createElement("button");
  deleteButton.innerText="X"
  deleteButton.addEventListener('click', removeTodo);
  newItem.appendChild(deleteButton);

};

const removeTodo = (evt) => {
  evt.target.parentNode.remove();
  document.getElementById("completed-message").style.visibility="visible";
  window.setTimeout(rehideComplete,2000);
}

const rehideComplete = () => {
  document.getElementById("completed-message").style.visibility="hidden";
}
const completeTodo = (evt) => {
  evt.target.getAttribute ? null : evt.target.setAttribute('false')
}

document.querySelector("form").addEventListener("submit", addTodo);