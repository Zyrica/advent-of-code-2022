import { loadInput } from '../../load-input.js';
import { outcomes, shapes } from './scoring.js';
import Round from './round.js';

function calculateTotalScore(rounds) {
    return rounds.reduce((acc, round) => round.score + acc, 0);
}

const shapeMap = {
    A: shapes.rock,
    B: shapes.paper,
    C: shapes.scissors,
    X: shapes.rock,
    Y: shapes.paper,
    Z: shapes.scissors,
};
const outcomeMap = {
    X: outcomes.lose,
    Y: outcomes.draw,
    Z: outcomes.win,
};

const input = loadInput(import.meta);
const rounds = input.map(s => new Round(shapeMap[s[0]], shapeMap[s[2]]));
const answers = [calculateTotalScore(rounds)];

const rounds2 = input.map(s => new Round(shapeMap[s[0]], null, outcomeMap[s[2]]));
answers.push(calculateTotalScore(rounds2));

console.log({
    input,
    rounds,
    rounds2,
    answers,
});