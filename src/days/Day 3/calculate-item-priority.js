export function calculateItemPriority(item) {
    const isLowerCase = item.match(/[a-z]/);
    return item.charCodeAt(0) - (isLowerCase ? 96 : 65 - 27);
}