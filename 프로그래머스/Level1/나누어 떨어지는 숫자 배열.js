// https://programmers.co.kr/learn/courses/30/lessons/12910

const solution = (arr, divisor) =>
	arr.filter((a) => a % divisor === 0).length === 0
		? [-1]
		: arr.filter((a) => a % divisor === 0).sort((a, b) => a - b);
