// https://programmers.co.kr/learn/courses/30/lessons/12981

function solution(n, words) {
	let turn = -1;
	for (let i = 1; i < words.length; i++) {
		const before = words[i - 1];
		const current = words[i];
		if (words.indexOf(current) < i || before[before.length - 1] !== current[0]) {
			turn = i;
			break;
		}
	}
	return turn === -1 ? [0, 0] : [(turn % n) + 1, parseInt(turn / n) + 1];
}
