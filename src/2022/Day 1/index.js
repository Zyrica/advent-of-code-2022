let calories;

export function task1(input) {
  calories = input
    .reduce((acc, cal) => {
      if (cal) {
        acc[acc.length - 1] += Number(cal);
      } else {
        acc.push(0);
      }
      return acc;
    }, [0])
    .sort((a, b) => b - a);

  return calories[0];
}

export function task2(input) {
  return calories
    .slice(0, 3)
    .reduce((acc, cal) => acc + cal, 0);
}
