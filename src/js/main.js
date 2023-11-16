import { Task } from "./modules/Task";
import "./../scss/style.scss";

const task1 = new Task("Krydda köttbullen", "Med ketchup");
const task2 = new Task("Samla pengar till tårta", "Inte princesstårta");
const task3 = new Task ("Gör hot shots", "Koka kaffe, vispa grädde!");
const task4 = new Task ("Åk pendeltåg", "Jag är en loser baby");

const tasks = [task1, task2, task3, task4];

console.log(tasks);


