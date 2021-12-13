// https://programmers.co.kr/learn/courses/30/lessons/12934

const solution = (n) => {
  const temp = parseInt(n ** (1 / 2));
  if (temp ** 2 === n) return (temp + 1) ** 2;
  return -1;
};
