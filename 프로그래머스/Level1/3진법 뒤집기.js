// https://programmers.co.kr/learn/courses/30/lessons/68935

const three = (n) => {
	let result = '';
	while (n != 0) {
		const res = n % 3;
		n = parseInt(n / 3);
		result = res + result;
	}
	return result;
};

const solution = (n) => {
	const a = three(n);
	return a
		.split('')
		.map((num, idx) => 3 ** idx * num)
		.reduce((prev, cur) => prev + cur, 0);
};
