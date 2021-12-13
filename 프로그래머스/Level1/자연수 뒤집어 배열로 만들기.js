// https://programmers.co.kr/learn/courses/30/lessons/12932

const solution = (n) =>
  n
    .toString()
    .split('')
    .reverse()
    .map((a) => Number(a));
