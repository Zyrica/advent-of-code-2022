import { loadInput } from '../../load-input.js';

// Task 1 - 10m 9s
const input = loadInput(import.meta);
const pairs = input
    .map(s => s.split(','))
    .map(pair => pair.map(s => ({
        start: Number(s.split('-')[0]),
        stop: Number(s.split('-')[1]),
    })));

const fullyOverlap = pairs.reduce((acc, pair) => {
    const isFullOverlap =
        pair[0].start <= pair[1].start && pair[0].stop >= pair[1].stop ||
        pair[0].start >= pair[1].start && pair[0].stop <= pair[1].stop;
    return acc + (isFullOverlap ? 1 : 0);
}, 0);

const answers = [fullyOverlap];

// Task 2 - 16m 21s
const anyOverlap = pairs.reduce((acc, pair) => {

    const noOverlap =
        pair[0].stop < pair[1].start ||
        pair[1].stop < pair[0].start;

    return acc + (noOverlap ? 0 : 1);
}, 0);
answers.push(anyOverlap);

console.log({
    input,
    answers,
});
