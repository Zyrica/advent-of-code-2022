import { loadInput } from '../../load-input.js';
import { Rucksack } from './rucksack.js';
import { Group } from './group.js';
import { prioritySum } from './priority-sum.js';

// Task 1
const input = loadInput(import.meta);
const rucksacks = input.map(items => new Rucksack(items));
const answers = [prioritySum(rucksacks)];

// Task 2
const groups = [];
while (rucksacks.length) {
    const group = new Group(rucksacks.splice(0, 3));
    groups.push(group);
}
answers.push(prioritySum(groups));

console.log({
    input,
    rucksacks,
    groups,
    answers,
});
