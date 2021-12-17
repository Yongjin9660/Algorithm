// https://programmers.co.kr/learn/courses/30/lessons/87946

const permutations = (arr, n) => {
	const result = [];
	if (n === 1) return arr.map((v) => [v]);
	arr.forEach((v, idx) => {
		const restArr = arr.filter((_, i) => i !== idx);
		const permuArr = permutations(restArr, n - 1);
		const combineArr = permuArr.map((a) => [...a, v]);
		result.push(...combineArr);
	});
	return result;
};

const solution = (k, dungeons) => {
	let answer = -1;
	permutations(dungeons, dungeons.length).map((arr) => {
		let tempK = k;
		let cnt = 0;
		arr.forEach(([a, b]) => {
			if (tempK >= a) {
				tempK -= b;
				cnt++;
			}
		});
		answer = Math.max(answer, cnt);
	});
	return answer;
};
