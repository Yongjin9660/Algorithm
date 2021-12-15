// https://programmers.co.kr/learn/courses/30/lessons/72411

const combinations = (arr, num) => {
	const result = [];
	if (num === 1) return arr.map((a) => [a]);
	arr.forEach((a, idx) => {
		const restArr = arr.slice(idx + 1);
		const combinationArr = combinations(restArr, num - 1);
		const combineArr = combinationArr.map((arr) => [...arr, a]);
		result.push(...combineArr);
	});
	return result;
};

const solution = (orders, course) => {
	let answer = [];
	course.forEach((num) => {
		const obj = {};
		orders.forEach((order) => {
			combinations(order.split(''), num).forEach((arr) => {
				const str = arr.sort().join('');
				str in obj ? (obj[str] += 1) : (obj[str] = 1);
			});
		});
		const maxCnt = Math.max(...Object.values(obj));
		if (maxCnt !== 1) {
			Object.entries(obj).forEach(([key, value]) => {
				if (value === maxCnt) answer.push(key);
			});
		}
	});
	return answer.sort();
};
