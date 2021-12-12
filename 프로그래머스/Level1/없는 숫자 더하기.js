// https://programmers.co.kr/learn/courses/30/lessons/86051

const solution = (numbers) => 45 - numbers.reduce((prev, cur) => prev + cur, 0);
