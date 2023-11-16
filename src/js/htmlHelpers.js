export const listLoop = (tasks, list) => {
    tasks.forEach ((task) => {
    const listItem = document.createElement("li");
    const listTitle = document.createElement("h4");
    const listDescription = document.createElement("span");

    listTitle.innerText = task.title;
    listDescription.innerText = task.description;

    listItem.appendChild(listTitle);
    listItem.appendChild(listDescription);
    list.appendChild(listItem);
    });
};

export const createListHtml = (tasksActive, listActive, tasksInactive, listInactive) => {
    listLoop(tasksActive, listActive);
    listLoop(tasksInactive, listInactive);
};