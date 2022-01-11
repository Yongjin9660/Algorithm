function combinationWithRepeat(arr, num) {
	const result = [];
	if (num === 1) {
		return arr.map((v) => [v]);
	}
	arr.forEach((v, idx) => {
		const restArr = arr.slice(idx);
		const combinationArr = combinationWithRepeat(restArr, num - 1);
		const combineArr = combinationArr.map((arr) => [...arr, v]);
		result.push(...combineArr);
	});
	return result;
}

console.log(combinationWithRepeat([1, 2, 3, 4], 3));
