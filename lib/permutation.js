function permutation(arr, num) {
	const result = [];
	if (num === 1) {
		return arr.map((v) => [v]);
	}
	arr.forEach((v, idx) => {
		const restArr = arr.filter((_, i) => i !== idx);
		const permutationArr = permutation(restArr, num - 1);
		const combineArr = permutationArr.map((arr) => [...arr, v]);
		result.push(...combineArr);
	});
	return result;
}

console.log(permutation([1, 2, 3, 4], 2));
console.log(permutation([1, 2, 3, 4], 3));
