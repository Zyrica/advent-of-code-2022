let monkies, commonDenominator

function Monkey(s, noWorries) {
  s = s.split('\n');
  this.s = s;
  this.id = Number(s[0].replace('Monkey ', '').replace(':', ''));
  this.items = s[1].match(/[0-9]*/gm).filter(s => s !== '').map(s => Number(s));
  this.operation = (old) => {
    let [sign, value] = s[2].replace('  Operation: new = old ', '').split(' ');
    if (value === 'old') value = old;
    else value = Number(value);
    switch (sign) {
      case '*':
        return old * value;
      case '+':
        return old + value;
    }

  };
  this.denominator = Number(s[3].replace('  Test: divisible by ', ''));
  this.test = (worry) => {
    return worry % this.denominator === 0;
  };
  this.true = Number(s[4].replace('    If true: throw to monkey ', ''));
  this.false = Number(s[5].replace('    If false: throw to monkey ', ''));
  this.activity = 0;

  this.run = () => {
    while (this.items.length) {
      this.activity++;

      let worry = this.items.shift();
      worry = this.operation(worry);
      worry = worry % commonDenominator;
      if (noWorries) {
        worry = Math.floor(worry / 3);
      }
      const targetId = this.test(worry) ? this.true : this.false;


      monkies[targetId].items.push(worry);
    }
  };
}

const parseAndRun = (input, rounds, noWorries) => {
  monkies = input.split('\n\n').map(s => new Monkey(s, noWorries));
  commonDenominator = monkies.map(m => m.denominator).reduce((a, v) => a * v, 1);

  const round = () => monkies.forEach(m => m.run());
  [...Array(rounds)].forEach(round);
  return monkies.map(m => m.activity).sort((a, b) => b - a).slice(0, 2).reduce((a, v) => a * v, 1)

}

const task1 = input => parseAndRun(input, 20, true);
const task2 = input => parseAndRun(input, 10000);

const input = `Monkey 0:
  Starting items: 61
  Operation: new = old * 11
  Test: divisible by 5
    If true: throw to monkey 7
    If false: throw to monkey 4

Monkey 1:
  Starting items: 76, 92, 53, 93, 79, 86, 81
  Operation: new = old + 4
  Test: divisible by 2
    If true: throw to monkey 2
    If false: throw to monkey 6

Monkey 2:
  Starting items: 91, 99
  Operation: new = old * 19
  Test: divisible by 13
    If true: throw to monkey 5
    If false: throw to monkey 0

Monkey 3:
  Starting items: 58, 67, 66
  Operation: new = old * old
  Test: divisible by 7
    If true: throw to monkey 6
    If false: throw to monkey 1

Monkey 4:
  Starting items: 94, 54, 62, 73
  Operation: new = old + 1
  Test: divisible by 19
    If true: throw to monkey 3
    If false: throw to monkey 7

Monkey 5:
  Starting items: 59, 95, 51, 58, 58
  Operation: new = old + 3
  Test: divisible by 11
    If true: throw to monkey 0
    If false: throw to monkey 4

Monkey 6:
  Starting items: 87, 69, 92, 56, 91, 93, 88, 73
  Operation: new = old + 8
  Test: divisible by 3
    If true: throw to monkey 5
    If false: throw to monkey 2

Monkey 7:
  Starting items: 71, 57, 86, 67, 96, 95
  Operation: new = old + 7
  Test: divisible by 17
    If true: throw to monkey 3
    If false: throw to monkey 1`;

console.log(task1(input));
console.log(task2(input));