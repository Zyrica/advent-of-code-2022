import keyValueSwap from '../../key-value-swap.js';
import { outcomes, shapes } from './scoring.js';


const wins = {
    [shapes.rock]: shapes.scissors,
    [shapes.paper]: shapes.rock,
    [shapes.scissors]: shapes.paper,
};
const lose = keyValueSwap(wins);

export default class Round {
    constructor(opponent, player, outcome) {
        this.opponent = opponent;
        this.player = player;
        this.outcome = outcome;

        if (!outcome) this.calculateOutcome();
        if (!player) this.calculatePlayer();

        this.score = this.player + this.outcome;
    }

    calculateOutcome() {
        this.outcome = outcomes.lose;
        if (this.opponent === this.player) {
            this.outcome = outcomes.draw;
        } else if (wins[this.player] === this.opponent) {
            this.outcome = outcomes.win;
        }
    }

    calculatePlayer() {
        this.player = this.opponent;
        if (this.outcome === outcomes.lose) {
            this.player = wins[this.opponent];
        } else if (this.outcome === outcomes.win) {
            this.player = lose[this.opponent];
        }
    }
}
