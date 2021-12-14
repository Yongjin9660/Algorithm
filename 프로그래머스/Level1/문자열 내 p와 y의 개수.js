// https://programmers.co.kr/learn/courses/30/lessons/12916

function solution(s) {
	s = s.toLowerCase();
	const p = s.split('').filter((a) => a === 'p').length;
	const y = s.split('').filter((a) => a === 'y').length;
	return p === y ? true : false;
}
