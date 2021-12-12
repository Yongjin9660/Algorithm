// https://programmers.co.kr/learn/courses/30/lessons/12954

const solution = (x, n) => {
  let answer = [x];
  for (let i = 2; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
};
