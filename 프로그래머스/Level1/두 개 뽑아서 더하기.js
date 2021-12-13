// https://programmers.co.kr/learn/courses/30/lessons/68644

const combinations = (arr, n) => {
	const result = [];
	if (n === 1) return arr.map((v) => [v]);
	arr.forEach((a, idx) => {
		const fix = a;
		const restArr = arr.slice(idx + 1);
		const combinationArr = combinations(restArr, n - 1);
		const combineFix = combinationArr.map((arr) => [...arr, fix]);
		result.push(...combineFix);
	});
	return result;
};

const solution = (numbers) => {
	const numberSet = new Set();
	combinations(numbers, 2)
		.map((arr) => arr.reduce((prev, cur) => prev + cur, 0))
		.forEach((s) => numberSet.add(s));
	const answer = [];
	for (let a of numberSet) {
		answer.push(a);
	}
	return answer.sort((a, b) => a - b);
};
