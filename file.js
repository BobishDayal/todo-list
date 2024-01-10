"use strict";

const check = document.getElementById("check");
const wrapper = document.getElementById("wrapper");
const tableContainer = document.getElementById("tableContainer");

const TodoList = document.getElementById("todo_heading");
const btn = document.getElementsByClassName("edit");
const addTodoBtn = document.getElementById("addTodo");
const modal = document.querySelector(".modal");
const container = document.querySelector(".container");

let tempTodo = [
  {
    title: "check",
    detail: "check",
  },
];
const clickHandler = () => {
  console.log("hello");
};

function generateTable(data) {
  console.log(data);
  let table = "<table>";
  table +=
    "<tr><th>S.no</th><th>Title</th><th>Description</th><th>Action</th></tr>";
  data.forEach((item, i) => {
    table += `<tr><td>${i + 1}</td><td>${item.title}</td><td>${
      item.detail
    }</td><td><div ><button class="edit"
    data-id="${i}" data-title= "${item.title}" data-des="${
      item.detail
    }" ><i class='bx bxs-edit'></i></button> <button class="delete" data-id="${i}" ><i class='bx bxs-trash'></i></button></div></td></tr>`;
  });
  table += "</table>";
  return table;
}

function generateList(data) {
  let List = "<ul>";

  data.forEach((item, i) => {
    List += `<li> <button class="listButton" data-id="${i}" data-title= "${item.title}" data-des="${item.detail}" >${item.title} </button></li>`;
  });
  List += "</ul>";

  return List;
}

tableContainer.innerHTML = generateTable(tempTodo);

TodoList.innerHTML = generateList(tempTodo);

reRunCode();

let todoForm = document.getElementById("Todo");

///adding todo to the list

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let title = document.getElementById("title").value;
  let description = document.getElementById("Description").value;

  if (title.value == "" || description.value == "") {
    alert("Ensure you input a value in both fields!");
  } else {
    tempTodo = [
      ...tempTodo,
      {
        title: title,
        detail: description,
      },
    ];

    tableContainer.innerHTML = generateTable(tempTodo);
    TodoList.innerHTML = generateList(tempTodo);

    reRunCode();
  }

  clearInputs();
  closeModal();
});

function showModal() {
  modal.classList.add("showModal");
  container.classList.add("showContainer");
}

//to close the modal without saving anything
function closeModal() {
  modal.classList.remove("showModal");
  container.classList.remove("showContainer");
  clearInputs();
}

//this should stay here otherwise it won't work

function clearInputs() {
  // Clear input fields
  document.getElementById("title").value = "";
  document.getElementById("Description").value = "";
}

//to edit the Existing Todo List
function editTodo(title, description, id) {
  document.getElementById("title").value = title;
  document.getElementById("Description").value = description;
}

// to Delete the item in the existing array by filtering through the id

function deleteTodo(id) {
  console.log(id);
}

function reRunCode() {
  const listButton = document.querySelectorAll(".listButton");
  const editButton = document.querySelectorAll(".edit");
  const deleteButton = document.querySelectorAll(".delete");

  const editEvent = (item) => {
    let id = item.dataset.id;
    let title = item.dataset.title;
    let description = item.dataset.des;

    showModal();
    editTodo(title, description, id);
  };

  const deleteEvent = (item) => {
    let id = item.dataset.id;

    deleteTodo(id);
  };

  deleteButton.forEach((item) => {
    item.addEventListener("click", () => {
      deleteEvent(item);
    });
  });

  editButton.forEach((item) => {
    item.addEventListener("click", () => {
      editEvent(item);
    });
  });

  listButton.forEach((item) => {
    item.addEventListener("click", () => {
      editEvent(item);
    });
  });
}
