// https://programmers.co.kr/learn/courses/30/lessons/12912

const solution = (a, b) => {
	const min = Math.min(a, b);
	const max = Math.max(a, b);
	let answer = 0;
	for (let i = min; i <= max; i++) {
		answer += i;
	}
	return answer;
};
