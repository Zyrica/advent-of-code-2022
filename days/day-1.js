import { readFileSync } from 'fs';
import { resolve } from 'path'

function parseInput(rawInput) {
    const array = rawInput.split('\r\n');
    const elves = [];

    let elf = [];
    array.forEach(calories => {
        if (!calories) {
            elves.push(elf);
            elf = [];
        } else {
            elf.push(Number(calories));
        }
    })
    return elves;
}

// Task 1
const rawInput = readFileSync(resolve('days/day-1.input'), 'utf-8');
const input = parseInput(rawInput);
const elves = input
    .map(calories => ({
        calories,
        sum: calories.reduce((acc, value) => acc + value, 0),
    }))
    .sort((a, b) => b.sum - a.sum);

const elfWithMostCalories = elves[0];

const answers = [elfWithMostCalories.sum];

// Task 2
const top3 = elves.slice(0,3);
const sumTop3 = top3.reduce((acc, elf) => acc + elf.sum, 0);
answers.push(sumTop3);

console.log({
    input,
    elves,
    elfWithMostCalories,
    answers
});
