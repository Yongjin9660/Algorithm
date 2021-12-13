// https://programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
  if (arr.length === 1) return [-1];
  const minValue = Math.min(...arr);
  arr.splice(arr.indexOf(minValue), 1);
  return arr;
}
