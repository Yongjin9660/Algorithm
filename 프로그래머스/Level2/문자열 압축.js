// https://programmers.co.kr/learn/courses/30/lessons/60057

function solution(s) {
	if (s.length === 1) return 1;
	let answer = s.length;
	for (let i = 1; i <= parseInt(s.length / 2); i++) {
		let cnt = 1;
		let str = '';
		for (let j = 0; j < s.length; j += i) {
			const current = s.substr(j, i);
			const next = s.substr(j + i, i);
			if (current === next) {
				cnt++;
				continue;
			}
			str = cnt > 1 ? str + cnt + current : str + current;
			cnt = 1;
		}
		answer = Math.min(answer, str.length);
	}
	return answer;
}
