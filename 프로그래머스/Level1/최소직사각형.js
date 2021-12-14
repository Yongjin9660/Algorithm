// https://programmers.co.kr/learn/courses/30/lessons/86491

const solution = (sizes) => {
	let minValue = -1;
	let maxValue = -1;
	sizes.forEach((arr) => {
		arr.sort((a, b) => a - b);
		maxValue = Math.max(maxValue, arr[1]);
		minValue = Math.max(minValue, arr[0]);
	});
	return minValue * maxValue;
};
