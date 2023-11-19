import { Task } from "./modules/Task";
import "./../scss/style.scss";
import { createListHtml } from "./htmlHelpers";

export const listActive = document.getElementById("activelist");
export const listInactive = document.getElementById("inactivelist");


/* ============| List creation |============ */
//Import lists saved in local storage
let lsTasksActive = JSON.parse(localStorage.getItem("tasksActive")) || [];
let lsTasksInactive = JSON.parse(localStorage.getItem("tasksInactive")) || [];

//Create dummy lists if local storage is empty
if (lsTasksActive.length == 0 && lsTasksInactive.length == 0){
    const task1 = new Task(true, "Åk pendeltåg", "Jag är en loser baby!");
    const task2 = new Task(true, "Gör hot shots", "Koka kaffe, vispa grädde!");
    const task3 = new Task(true, "Skicka meddelande", "Kolla om mamma och pappa har det kul på restaurangen.");
    const task4 = new Task(true, "Krydda köttbullen", "Med ketchup.");
    const task5 = new Task(true, "En utan description");
    const task6 = new Task(true, "Här är en uppgift med en riktigt lång titel", "Men det ska nog gå bra trots att även beskrivningen är superlång och garanterat kommer leda till flera rader text som måste presenteras på ett fint sätt i DOM:en. Oj oj oj jag är lite nervös nu. Den här kommer garanterat tvinga lite extra radbrythingar. Undrar om det ser bra ut.");
    const task7 = new Task(true, "Måla hela världen", "Lilla mamma.");
    const task8 = new Task(false, "Boka resa", "ARN → CPH.");
    const task9 = new Task(false, "Köp blommor", "OBS inte liljor.");
    const task10 = new Task(false, "Samla pengar till tårta", "Inte princesstårta.");
    const task11 = new Task(false, "Kom på fler uppgifter", "Så man kan se hur en lista med många punkter ser ut.");
    lsTasksActive = [task1, task2, task3, task4, task5, task6, task7];
    lsTasksInactive = [task8, task9, task10, task11];
};

//Create the actual lists
export const tasksActive = lsTasksActive;
export const tasksInactive = lsTasksInactive;


/* ===| Add new task form |=== */
const form = document.getElementById("newtaskform");
const formTitle = document.createElement("input");
formTitle.required = true;
const formTitleLabel = document.createElement("label");
formTitleLabel.innerText = "Rubrik";
const formDesc = document.createElement("textarea");
const formDescLabel = document.createElement("label");
formDescLabel.innerText = "Beskrivning"
const formSubmit = document.createElement("button");
formSubmit.innerText = "Lägg till";

form.appendChild(formTitleLabel);
form.appendChild(formTitle);
form.appendChild(formDescLabel);
form.appendChild(formDesc);
form.appendChild(formSubmit);

//Create new task, add to list, clear input values and regenerate lists
addEventListener("submit", (e) => {
    e.preventDefault();
    
    const task = new Task(true, formTitle.value, formDesc.value);
    tasksActive.push(task);

    formTitle.value = "";
    formDesc.value = "";
    console.log(tasksActive);
    createListHtml();
});


const inputWrapper = document.getElementById("inputwrapper");
const toggleInputButton = document.getElementById("toggleinput");
toggleInputButton.addEventListener ("click", () => {
    inputWrapper.classList.toggle("visibility--off");
    inputWrapper.classList.toggle("visibility--on");
});


/* ============| Generate HTML |============ */
createListHtml();