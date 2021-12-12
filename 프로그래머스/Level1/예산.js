// https://programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, budget) {
  d.sort((a, b) => a - b);
  let answer = 0;
  d.forEach((temp) => {
    if (temp <= budget) {
      budget -= temp;
      answer++;
    }
  });
  return answer;
}
