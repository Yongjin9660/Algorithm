// https://programmers.co.kr/learn/courses/30/lessons/87390

const solution = (n, left, right) => {
	const ans = [];
	while (left <= right) {
		ans.push(Math.max(Math.floor(left / n), left++ % n) + 1);
	}
	return ans;
};
