const weight = (n) => Math.pow(Math.random(), 1 / n);
function shuffle(input) {
  const numbers = {};
  for (let n of input) {
    numbers[n] = input.length - n + 1;
  }

  const weights = Object.entries(numbers).map(([n, w]) => [
    parseInt(n),
    weight(w),
  ]);
  return weights.sort((a, b) => a[1] - b[1]).map(([n]) => n);
}

const numbers = 10;
const initial = [];
for (let i = 1; i <= numbers; i++) {
  initial.push(i);
}

let iterations = 0;
const times = [];
while (iterations < 20) {
  let arr = shuffle(initial);

  let permutation = 0;
  const start = Date.now();
  while (!arr.every((n, i) => n === initial[i])) {
    arr = shuffle(arr);
    permutation++;
  }

  const end = Date.now();
  const time = end - start;
  console.log(
    `Array of ${initial.length} sorted in ${permutation} permutations, ${
      time > 1000 ? `${(time / 1000).toFixed(2)}s` : `${time}ms`
    }`
  );
  iterations++;
  times.push(time);
}

console.log(
  `Average time (20 trials): ${(
    times.reduce((a, b) => a + b, 0) /
    50 /
    1000
  ).toFixed(4)}s`
);
