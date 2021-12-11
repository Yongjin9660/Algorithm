// https://programmers.co.kr/learn/courses/30/lessons/70128

function solution(a, b) {
  return a.reduce((prev, cur, idx) => (prev += cur * b[idx]), 0);
}
