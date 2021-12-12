// https://programmers.co.kr/learn/courses/30/lessons/12947

const solution = (x) => {
  const s = x
    .toString()
    .split('')
    .map((n) => Number(n))
    .reduce((prev, cur) => prev + cur, 0);
  return x % s === 0 ? true : false;
};
