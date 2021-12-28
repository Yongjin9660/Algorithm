// https://programmers.co.kr/learn/courses/30/lessons/42861

function getParent(parents, x) {
	return parents[x] === x ? x : getParent(parents, parents[x]);
}

function unionParent(parents, a, b) {
	const p1 = getParent(parents, a);
	const p2 = getParent(parents, b);
	return p1 < p2 ? (parents[p2] = p1) : (parents[p1] = p2);
}

function isSameParent(parents, a, b) {
	const p1 = getParent(parents, a);
	const p2 = getParent(parents, b);
	return p1 === p2 ? true : false;
}

function solution(n, costs) {
	let answer = 0;
	const parents = [];
	for (let i = 0; i < n; i++) {
		parents.push(i);
	}
	costs
		.sort((a, b) => a[2] - b[2])
		.forEach((cost) => {
			if (isSameParent(parents, cost[0], cost[1]) === false) {
				answer += cost[2];
				unionParent(parents, cost[0], cost[1]);
			}
		});
	return answer;
}
