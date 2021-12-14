// https://programmers.co.kr/learn/courses/30/lessons/12917

const solution = (s) =>
	s
		.split('')
		.map((a) => a.charCodeAt(0))
		.sort((a, b) => b - a)
		.map((a) => String.fromCharCode(a))
		.join('');
