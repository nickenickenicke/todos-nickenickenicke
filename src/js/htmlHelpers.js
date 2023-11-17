import { listActive, listInactive, tasksActive, tasksInactive } from "./main";

export const listLoop = (tasks) => {
    //Checks if loop is handling active or inactive tasks and selects correct list-element
    let list = listActive;
    if (tasks == tasksInactive) {
     list = listInactive;
    }
    
    list.innerHTML = "";
    
    console.log(tasks);

    tasks.forEach ((task, i) => {
        const listItem = document.createElement("li");
        const listTitle = document.createElement("h4");
        const listDescription = document.createElement("span");

        listTitle.innerText = task.title;
        listDescription.innerText = task.description;

        listItem.appendChild(listTitle);
        listItem.appendChild(listDescription);
        list.appendChild(listItem);

        //Functionality to remove item from list, insert into opposite list and regenerate html
        listItem.addEventListener("click", () => {
            task.isActive = !task.isActive;

            if (tasks == tasksActive){
            tasks.splice(i, 1);
            tasksInactive.push(task);
            }

            if (tasks == tasksInactive){
            tasks.splice(i, 1);
            tasksActive.push(task);
            }

            createListHtml();
        });
    });
};

export const createListHtml = () => {
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