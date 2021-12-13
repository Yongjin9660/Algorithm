// https://programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
	let answer = '';
	let temp = 1;
	s.split('').forEach((a, idx) => {
		if (a === ' ') {
			temp = 1;
			answer += a;
		} else if (temp % 2 === 0) {
			answer += a.toLowerCase();
			temp++;
		} else if (temp % 2 !== 0) {
			answer += a.toUpperCase();
			temp++;
		}
	});
	return answer;
}
