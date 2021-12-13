// https://programmers.co.kr/learn/courses/30/lessons/12931

const solution = (n) =>
  n
    .toString()
    .split('')
    .map((n) => Number(n))
    .reduce((prev, cur) => prev + cur, 0);
