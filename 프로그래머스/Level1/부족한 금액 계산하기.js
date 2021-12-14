// https://programmers.co.kr/learn/courses/30/lessons/82612

const solution = (price, money, count) => {
	let s = 0;
	for (let i = 1; i <= count; i++) {
		s += price * i;
	}
	return s - money > 0 ? s - money : 0;
};
