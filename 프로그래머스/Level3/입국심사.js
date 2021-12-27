// https://programmers.co.kr/learn/courses/30/lessons/43238

function solution(n, times) {
	times.sort((a, b) => b - a);
	let left = 0;
	let right = times[0] * n;
	while (left <= right) {
		const mid = parseInt((left + right) / 2);
		const cnt = times.reduce((prev, cur) => prev + parseInt(mid / cur), 0);
		cnt >= n ? (right = mid - 1) : (left = mid + 1);
	}
	return left;
}
