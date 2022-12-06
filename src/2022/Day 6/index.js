let inputArray;

function findFirstUniqueSlice(array, length) {
  let marker;
  for (let i = 0; i < array.length; i++) {
    const set = new Set(array.slice(i, i + length));
    if (set.size === length) {
      marker = i + length;
      break;
    }
  }
  return marker;
}

export function task1(input) {
  inputArray = input[0].split('');

  return findFirstUniqueSlice(inputArray, 4);
}

export function task2(input) {
  return findFirstUniqueSlice(inputArray, 14);
}
