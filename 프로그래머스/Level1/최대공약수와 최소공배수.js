// https://programmers.co.kr/learn/courses/30/lessons/12940

const solution = (n, m) => {
	const minValue = Math.min(n, m);
	let gcd = 1;
	for (let i = 2; i <= minValue; i++) {
		if (n % i === 0 && m % i === 0) gcd = i;
	}
	return [gcd, (n / gcd) * m];
};
