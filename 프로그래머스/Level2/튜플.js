// https://programmers.co.kr/learn/courses/30/lessons/64065?language=javascript

const solution = (s) => {
	const set = new Set();
	const answer = [];
	s.split(',{')
		.map((a) => a.replace(/{|}/gi, ''))
		.map((s) => s.split(','))
		.sort((a, b) => a.length - b.length)
		.forEach((arr) => arr.forEach((a) => set.add(a)));
	for (let i of set) {
		answer.push(Number(i));
	}
	return answer;
};
