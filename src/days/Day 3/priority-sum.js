export function prioritySum(array) {
    return array.reduce((acc, {priority}) => acc += priority, 0);
}