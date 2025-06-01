import { tasks } from "./arrow.js";
import { taskById } from "./template.js";

function handlerCheckbox (checkbox,taskObj, taskText) {
     checkbox.addEventListener (`change`, (event) => {
        taskObj.completed = event.target.checked;
        checkbox.checked = taskObj.completed;
        taskText.style.textDecoration = taskObj.completed ? `line-through`: ``;
    });
};
function handlerButton (button, taskObj, taskText,) {
    button. addEventListener (`click`, () => {
        taskObj.completed = !taskObj.completed;
        const parent = button.closest (`.task-item`);
        const parentTextContent = parent.querySelector (`.task-item__main-content`);
            if (taskObj.completed) {
                const newTaskMessge = document.createElement (`span`);
                newTaskMessge.textContent = `Задача выполнена`;
                parentTextContent.replaceChild (newTaskMessge, taskText);
                taskObj._originalText = taskText;
            } else { 
               const oldTaskMessage = parentTextContent.querySelector(`span`);
               parentTextContent.replaceChild (taskObj._originalText, oldTaskMessage)
               delete taskObj._originalText;
            };
    });
};

export function task1 (id) {
    const html = taskById (id);
    if (!html) {
       return console.log (`нет id`);
    };
    document.body.insertAdjacentHTML(`beforeend`, html);
    const taskItem = document.querySelector(`.task-item[data-task-id="${id}"]`)
    const taskObj = tasks.find (t => t.id === id);
    if (!taskObj) {
        return (console.log (`объект не найден`))
    }
    const taskText = taskItem.querySelector(`.task-item__text`);
    const checkbox = taskItem.querySelector(`.checkbox-form__checkbox`);
    const button = taskItem.querySelector(`.task-item__delete-button`);
    if (!checkbox, !button) {
        console.log (`данные не найдены`);
    }
    handlerCheckbox (checkbox,taskObj, taskText);
    handlerButton (button, taskObj, taskText,);
    
return;
};









 
