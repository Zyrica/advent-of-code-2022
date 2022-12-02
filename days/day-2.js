import { readFileSync } from 'fs';
import { resolve } from 'path'

function parseInput(rawInput) {
    return rawInput.split('\r\n');
}

const rawInput = readFileSync(resolve('days/day-2.input'), 'utf-8');
const input = parseInput(rawInput);

function calculateTotalScore(games) {
    return games.reduce((acc, game) => game.score + acc, 0);
}

const shapes = {
    rock: 1,
    paper: 2,
    scissors: 3,
}
const shapeMap = {
    A: shapes.rock,
    B: shapes.paper,
    C: shapes.scissors,
    X: shapes.rock,
    Y: shapes.paper,
    Z: shapes.scissors,
}
const outcomes = {
    draw: 3,
    win: 6,
    lose: 0
}
const outcomeMap = {
    X: outcomes.lose,
    Y: outcomes.draw,
    Z: outcomes.win,
}

// Task 1
function calculateOutcome(opponent, player) {
    let outcome = outcomes.lose;
    if (opponent === player) {
        outcome = outcomes.draw;
    } else if (
        opponent === shapes.rock     && player === shapes.paper ||
        opponent === shapes.paper    && player === shapes.scissors ||
        opponent === shapes.scissors && player === shapes.rock
    ) {
        outcome = outcomes.win;
    }
    return outcome;
}

function calculateGame(s) {
    const opponent = shapeMap[s[0]];
    const player = shapeMap[s[2]];
    const outcome = calculateOutcome(opponent, player);

    const score = player + outcome;
    return {
        opponent,
        player,
        outcome,
        score
    }
}

const games = input.map(calculateGame);

const answers = [calculateTotalScore(games)];

// Task 2
const loseMap = {
    [shapes.rock]: shapes.scissors,
    [shapes.paper]: shapes.rock,
    [shapes.scissors]: shapes.paper
}
const winMap = {
    [shapes.rock]: shapes.paper,
    [shapes.paper]: shapes.scissors,
    [shapes.scissors]: shapes.rock
}

function calculatePlayer(opponent, outcome) {
    let player = opponent; // Draw

    if (outcome === outcomes.lose) {
        player = loseMap[opponent];
    } else if(outcome === outcomes.win) {
        player = winMap[opponent];
    }
    return player;
}

function calculateGameBasedOnTask2(s) {
    const opponent = shapeMap[s[0]];
    const outcome = outcomeMap[s[2]];
    const player = calculatePlayer(opponent, outcome);

    const score = player + outcome;
    return {
        opponent,
        player,
        outcome,
        score
    }
}
const gamesBasedOnTask2 = input.map(calculateGameBasedOnTask2);

answers.push(calculateTotalScore(gamesBasedOnTask2));


console.log({
    rawInput,
    input,
    games,
    gamesBasedOnTask2,
    answers
});
