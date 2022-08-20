import './style.css';
import generateTask from './modules/generateTask.js';
import checkInteraction from './modules/taskStatus.js';
import getTasks from './modules/task.js';
import isLocalStorageEmpty from './modules/isLocalStorageEmpty.js';
import addNewTask from './modules/addNewTask.js';
import removeFuncionality from './modules/removeFunctionality.js';
import editPreserve from './modules/editPreserve.js';
import updateCheckBox from './modules/updateCheckBox.js';
import clearCompleted from './modules/clearCompleted.js';

// Retrieve all task from local storage
// Edit and remove task from the list

window.onload = () => {
  if (isLocalStorageEmpty()) {
    localStorage.setItem('data', '[]');
  } else {
    const tasks = getTasks();

    tasks.sort((b, a) => b.index - a.index);
    tasks.forEach((el) => {
      const div = generateTask(el.discription);
      removeFuncionality(div);
      editPreserve(div);
      document.querySelector('.task-list').appendChild(div);
    });

    checkInteraction();
    updateCheckBox();
  }
};

document.getElementById('add-new-task').onchange = (e) => {
  const newTask = e.target.value;
  addNewTask(newTask);
  e.target.value = '';
};

document.querySelector('.end button').onclick = clearCompleted;