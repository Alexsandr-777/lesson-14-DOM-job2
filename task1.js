import { tasks } from "./arrow.js";
import { taskById } from "./template.js";
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
    if (!taskText) {
        console.log (`taskText не найден`)
    };
    taskText.textContent = taskObj.text;
    
    const checkbox = taskItem.querySelector(`.checkbox-form__checkbox`);
    if (!checkbox) {
        console.log (`checkbox не найден`)
    }
    checkbox.addEventListener (`change`, (event) => {
        taskObj.completed = event.target.checked;
        checkbox.checked = taskObj.completed;
        taskText.style.textDecoration = taskObj.completed ? `line-through`: ``;
    });
    const button = taskItem.querySelector(`.task-item__delete-button`);
    if (!button) {
        console.log (`button не найден`)
    }
    button.addEventListener(`click`, () =>{
        taskObj.completed = !taskObj.completed;
        if ( taskObj.completed) {
            taskText.textContent = ``;
             const taskMessge = document.createElement (`p`);
             taskMessge.textContent = `Задача выполнена`
             taskText.insertAdjacentElement (`afterend`, taskMessge)
        } else{
            taskText.textContent = taskObj.text;
            const removetaskMessge = taskItem.querySelector (`p`);
            if (removetaskMessge) {
                removetaskMessge.remove();
            };
        };
})
return;
};









 
