// https://programmers.co.kr/learn/courses/30/lessons/12933

const solution = (n) =>
  Number(
    n
      .toString()
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );
