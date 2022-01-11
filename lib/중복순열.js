function permutationWithRepeat(arr, num) {
	const result = [];
	if (num === 1) {
		return arr.map((v) => [v]);
	}
	arr.forEach((v) => {
		const permutationArr = permutationWithRepeat(arr, num - 1);
		const combineArr = permutationArr.map((arr) => [...arr, v]);
		result.push(...combineArr);
	});
	return result;
}

console.log(permutationWithRepeat([1, 2, 3, 4], 2));
