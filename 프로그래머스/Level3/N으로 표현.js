// https://programmers.co.kr/learn/courses/30/lessons/42895

function solution(N, number) {
	const set = new Array(8).fill().map(() => new Set());
	for (let i = 0; i < 8; i++) {
		let temp = '';
		for (let j = 0; j < i + 1; j++) {
			temp += String(N);
		}
		set[i].add(Number(temp));
		for (let j = 0; j < i; j++) {
			for (const a of set[j]) {
				for (const b of set[i - j - 1]) {
					set[i].add(a + b);
					set[i].add(a - b);
					set[i].add(a * b);
					set[i].add(a / b);
				}
			}
		}
		if (set[i].has(number)) return i + 1;
	}
	return -1;
}
