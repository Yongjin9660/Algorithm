// https://programmers.co.kr/learn/courses/30/lessons/12939

const solution = (s) => {
	const arr = s
		.split(' ')
		.map((num) => Number(num))
		.sort((a, b) => a - b);
	return arr[0] + ' ' + arr[arr.length - 1];
};
