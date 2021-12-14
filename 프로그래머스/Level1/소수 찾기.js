// https://programmers.co.kr/learn/courses/30/lessons/12921

const solution = (n) => {
	const isPrimes = new Array(n + 1).fill(true);
	isPrimes[0] = false;
	isPrimes[1] = false;
	isPrimes.forEach((n, idx) => {
		if (n === true) {
			for (let i = 2 * idx; i < isPrimes.length; i += idx) {
				isPrimes[i] = false;
			}
		}
	});
	return isPrimes.filter((number) => number === true).length;
};
