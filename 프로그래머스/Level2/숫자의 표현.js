// https://programmers.co.kr/learn/courses/30/lessons/12924

function solution(n) {
	let answer = 1;
	for (let i = 1; i < n; i++) {
		let temp = i;
		for (let j = i + 1; j < n; j++) {
			temp += j;
			if (temp === n) {
				answer++;
				break;
			} else if (temp > n) break;
		}
	}
	return answer;
}
