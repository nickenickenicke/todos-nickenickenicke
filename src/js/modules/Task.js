export class Task {
    isActive;
    title;
    description;
    constructor(isActive, title, description) {
        this.isActive = isActive;
        this.title = title;
        this.description = description;

        //If user doesn't enter description set to blank
        if(!description) {
            this.description = "";
        }
    }
}