import { Task } from "./modules/Task";
import "./../scss/style.scss";
import { createListHtml } from "./htmlHelpers";

export const listActive = document.getElementById("activelist");
export const listInactive = document.getElementById("inactivelist");

const task1 = new Task(true, "Krydda köttbullen", "Med ketchup");
const task2 = new Task(true, "Samla pengar till tårta", "Inte princesstårta");
const task3 = new Task(true, "Gör hot shots", "Koka kaffe, vispa grädde!");
const task4 = new Task(false, "Åk pendeltåg", "Jag är en loser baby");
const task5 = new Task(false, "En utan description");

export const tasksActive = [task1, task2, task3];
export const tasksInactive = [task4, task5];

createListHtml();




