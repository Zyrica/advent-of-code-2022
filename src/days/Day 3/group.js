import { calculateItemPriority } from './calculate-item-priority.js';

export class Group {
    constructor(rucksacks) {
        const r1 = rucksacks[0].items.split('');
        const r2 = rucksacks[1].items.split('');
        const r3 = rucksacks[2].items.split('');

        this.badge = r1.find(item => r2.includes(item) && r3.includes(item));
        this.priority = calculateItemPriority(this.badge);
    }
}