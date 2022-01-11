function permutation(arr, num) {
	const result = [];
	if (num === 1) {
		return arr.map((v) => [v]);
	}
	arr.forEach((v, idx) => {
		const restArr = arr.slice(idx + 1);
		const combinationArr = permutation(restArr, num - 1);
		const combineArr = combinationArr.map((arr) => [...arr, v]);
		result.push(...combineArr);
	});
	return result;
}

console.log(permutation([1, 2, 3, 4], 2));
console.log(permutation([1, 2, 3, 4], 3));
