// https://programmers.co.kr/learn/courses/30/lessons/76501

const solution = (absolutes, signs) =>
  absolutes.reduce((prev, cur, idx) => (signs[idx] ? prev + cur : prev - cur), 0);
