// https://programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
  const total = brown + yellow;

  for (let i = total; i >= 1; i--) {
    if (total % i !== 0) continue;
    if (2 * i + (2 * total) / i - 4 === brown) return [i, total / i];
  }
}
