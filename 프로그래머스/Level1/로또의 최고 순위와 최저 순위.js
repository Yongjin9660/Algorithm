// https://programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];
  const cnt = lottos.reduce((prev, cur) => (win_nums.includes(cur) ? prev + 1 : prev), 0);
  const zero = lottos.reduce((prev, cur) => (cur === 0 ? prev + 1 : prev), 0);
  return [rank[cnt + zero], rank[cnt]];
}
