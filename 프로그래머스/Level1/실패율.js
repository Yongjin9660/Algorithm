// https://programmers.co.kr/learn/courses/30/lessons/42889

const solution = (N, stages) => {
	const answer = [];
	for (let i = 1; i <= N; i++) {
		const total = stages.filter((a) => a >= i).length;
		const fail = stages.filter((a) => a === i).length;
		answer.push([fail / total, i]);
	}
	return answer.sort((a, b) => b[0] - a[0]).map((a) => a[1]);
};
