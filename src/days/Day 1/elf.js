export default class Elf {
    constructor() {
        this.calories = [];
        this.sum = 0;
    }

    addCalories(amount) {
        this.calories.push(amount);
        this.sum += amount;
    }
}
