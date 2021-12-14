// https://programmers.co.kr/learn/courses/30/lessons/12945

const solution = (n) => {
	const fibo = [0, 1];
	for (let i = 2; i <= n; i++) {
		fibo.push((fibo[i - 2] + fibo[i - 1]) % 1234567);
	}
	return fibo[fibo.length - 1];
};
