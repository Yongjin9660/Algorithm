# https://programmers.co.kr/learn/courses/30/lessons/12944

const sum = (arr) => arr.reduce((prev, cur) => prev + cur, 0);
const solution = (arr) => sum(arr) / arr.length;