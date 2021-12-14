// https://programmers.co.kr/learn/courses/30/lessons/12922

const solution = (n) => {
	let answer = '';
	for (let i = 1; i <= n; i++) {
		i % 2 === 0 ? (answer += '박') : (answer += '수');
	}
	return answer;
};
