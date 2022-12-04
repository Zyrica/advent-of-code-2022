const value = ' abcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();

export function task1(input) {
  return input.map(s => {
    const a1 = s.split('');
    const a2 = a1.splice(s.length / 2);

    const item = a1.find(s => a2.includes(s));
    return value.indexOf(item);
  }).reduce((a, v) => a + v, 0);
}

export function task2(input) {
  let group = [];
  const groups = [group];
  while (input.length) {
    const v = input.pop().split('');
    if (group.length === 3) {
      group = [v];
      groups.push(group);
    } else {
      group.push(v);
    }
  }
  return groups.map(group => {
    const item = group[0].find(v => group[1].includes(v) && group[2].includes(v));
    return value.indexOf(item);
  }).reduce((a, v) => a + v, 0);
}
