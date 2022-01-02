// https://programmers.co.kr/learn/courses/30/lessons/12985

function solution(n, a, b) {
	let p = -1;
	let minNumber = Math.min(a, b);
	let maxNumber = Math.max(a, b);
	for (let i = 1; i <= 20; i++) {
		if (2 ** i === n) {
			p = i;
			break;
		}
	}
	for (let i = 1; i <= p; i++) {
		if (minNumber % 2 === 1 && minNumber + 1 === maxNumber) {
			return i;
		}
		minNumber = minNumber % 2 === 0 ? parseInt(minNumber / 2) : parseInt(minNumber / 2) + 1;
		maxNumber = maxNumber % 2 === 0 ? parseInt(maxNumber / 2) : parseInt(maxNumber / 2) + 1;
	}
	return 1;
}
