export class Task {
    title;
    description;
    constructor(title, description) {
        this.title = title;
        this.description = description;

        //If user doesn't enter description set to blank
        if(!description) {
            this.description = "";
        }
    }
}