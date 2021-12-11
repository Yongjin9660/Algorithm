// https://programmers.co.kr/learn/courses/30/lessons/12977

const combinations = (arr, num) => {
  const result = [];
  if (num === 1) return arr.map((v) => [v]);
  arr.forEach((a, idx) => {
    const fix = a;
    const restArr = arr.slice(idx + 1);
    const combinationArr = combinations(restArr, num - 1);
    const combineFix = combinationArr.map((arr) => [...arr, fix]);
    result.push(...combineFix);
  });
  return result;
};

const sum = (arr) => arr.reduce((prev, cur) => prev + cur, 0);

const isPrime = (n) => {
  if (n === 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const solution = (nums) => {
  const combinationArr = combinations(nums, 3);
  return combinationArr.filter((v) => isPrime(sum(v))).length;
};
