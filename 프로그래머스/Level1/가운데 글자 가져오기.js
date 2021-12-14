// https://programmers.co.kr/learn/courses/30/lessons/12903

const solution = (s) =>
	s.length % 2 === 0
		? s[parseInt(s.length / 2 - 1)] + s[parseInt(s.length / 2)]
		: s[parseInt(s.length / 2)];
