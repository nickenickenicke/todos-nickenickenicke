import { listActive, listInactive, tasksActive, tasksInactive } from "./main";


/* ============| List generator |============ */
export const listLoop = (tasks) => {
    //Checks if loop is handling active or inactive tasks and selects correct list-element
    let list = listActive;
    if (tasks == tasksInactive) {
     list = listInactive;
    }
    //Reset html
    list.innerHTML = "";
    //Create each list element
    tasks.forEach ((task, i) => {
        //Create elements
        const listItem = document.createElement("li");
        const listTitle = document.createElement("h4");
        const listDescription = document.createElement("span");
        const btnChange = document.createElement("button");
        const btnMoveUp = document.createElement("button");
        const btnMoveDown = document.createElement("button");
        
        //Edit elements
        btnChange.type = "button";
        //Change inner text depending on list type
        if (tasks == tasksActive){
            btnChange.innerText = "Avklarad";
        };
        if (tasks == tasksInactive){
            btnChange.innerText = "Återuppta";
        };
        btnMoveUp.type = "button";
        btnMoveUp.innerText = "↑";
        btnMoveDown.type = "button";
        btnMoveDown.innerText = "↓";
        listTitle.innerText = task.title;
        listDescription.innerText = task.description;

        //Place elements
        listItem.appendChild(listTitle);
        listItem.appendChild(listDescription);
        //Don't add redundant sorting buttons to first and last item
        if (i > 0) {
            listItem.appendChild(btnMoveUp);
        };
        if (i < tasks.length-1) {
            listItem.appendChild(btnMoveDown);
        };
        listItem.appendChild(btnChange);
        list.appendChild(listItem);

        //Functionality to remove item from list, insert into opposite list and regenerate html
        btnChange.addEventListener("click", () => {
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

        //Functionality to move item up one position in list
        btnMoveUp.addEventListener("click", () => {
            tasks.splice(i, 1);
            tasks.splice(i-1, 0, task);
            createListHtml();
        })

        //Functionality to move item up down position in list
        btnMoveDown.addEventListener("click", () => {
            tasks.splice(i, 1);
            tasks.splice(i+1, 0, task);
            createListHtml();
        })
    });
};


/* ============| HTML creator |============ */
export const createListHtml = () => {
    listLoop(tasksActive);
    listLoop(tasksInactive);
    //Save lists to local storage
    localStorage.setItem("tasksActive", JSON.stringify(tasksActive));
    localStorage.setItem("tasksInactive", JSON.stringify(tasksInactive));
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