import { calculateItemPriority } from './calculate-item-priority.js';

export class Rucksack {
    constructor(items) {
        const itemsPerCompartment = items.length / 2;
        const compartment1 = items.slice(0, itemsPerCompartment).split('');
        const compartment2 = items.slice(itemsPerCompartment).split('');

        const misplacedItem = compartment1.find(item => compartment2.includes(item));

        this.items = items;
        this.priority = calculateItemPriority(misplacedItem);
    }
}