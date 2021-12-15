// https://programmers.co.kr/learn/courses/30/lessons/62048

const gcd = (a, b) => {
	if (a === b) return a;
	let maxValue = Math.max(a, b);
	let minValue = Math.min(a, b);
	while (true) {
		const res = maxValue % minValue;
		if (res === 0) return minValue;
		maxValue = minValue;
		minValue = res;
	}
};

const solution = (w, h) => w * h - (w + h - gcd(w, h));
