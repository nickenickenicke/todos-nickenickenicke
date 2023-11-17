export const listLoop = (tasks) => {
    let list = document.getElementById("activelist");

    console.log(tasks);
    
    //Checks if loop is handling active or inactive tasks and selects correct list-element
    if (tasks[0].isActive === false) {
        list = document.getElementById("inactivelist");
    }

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

export const createListHtml = (tasksActive, tasksInactive) => {
    listLoop(tasksActive);
    listLoop(tasksInactive);
};






// ↓↓↓↓ Kortlivat experiment med att bara ha en lista ↓↓↓↓

// export const listLoopTrueFalse = (tasks) => {
//     const listActive = document.getElementById("activelist");
//     const listInactive = document.getElementById("inactivelist");

//     listActive.innerHTML = "";
//     listInactive.innerHTML = "";

//     tasks.forEach ((task) => {
//         const listItem = document.createElement("li");
//         const listTitle = document.createElement("h4");
//         const listDescription = document.createElement("span");

//         listTitle.innerText = task.title;
//         listDescription.innerText = task.description;

//         listItem.appendChild(listTitle);
//         listItem.appendChild(listDescription);
//         if(task.isActive === true) {
//         listActive.appendChild(listItem);
//         }
//         if(task.isActive === false) {
//         listInactive.appendChild(listItem);
//         }

//         listItem.addEventListener("click", () => {
//             task.isActive = !task.isActive;
//             listLoopTrueFalse(tasks);
//             console.log(tasks);
//         });

//     });
// };