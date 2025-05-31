import { tasks } from "./arrow.js"

export function elementsTask (task) {
    const {id, text, completed} = task
    return `
 <div class="task-item" data-task-id="${id}">
    <div class="task-item__main-container">
        <div class="task-item__main-content">
            <form class="checkbox-form">
                <input class="checkbox-form__checkbox" type="checkbox" id="checkbox-${id}">
                <label for="checkbox-${id}"></label>
            </form>
            <span class="task-item__text">
                ${text}
            </span>
        </div>
        <button class="task-item__delete-button default-button delete-button">
            Удалить
        </button>
    </div>
</div>
`
}
export function taskById (id) {
    const task = tasks.find (t => String(t.id).trim() === String(id).trim());
    if (!task) {
        console.log (` задача не найдена`);
    }
    return task ? elementsTask(task) : ``;
};
