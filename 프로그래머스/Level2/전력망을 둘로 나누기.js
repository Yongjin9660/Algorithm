// https://programmers.co.kr/learn/courses/30/lessons/86971

const check = (graph, n) => {
	const visited = new Array(n + 1).fill(false);
	const dfs = (start) => {
		visited[start] = true;
		const adj = graph[start];
		adj.forEach((v, idx) => {
			if (v === 1 && !visited[idx]) dfs(idx);
		});
	};
	dfs(1);
	return Math.abs(visited.filter((v) => v).length - visited.filter((v) => !v).length + 1);
};

const solution = (n, wires) => {
	const graph = new Array(n + 1);
	for (let i = 1; i < n + 1; i++) {
		graph[i] = new Array(n + 1).fill(0);
	}
	wires.forEach(([a, b]) => {
		graph[a][b] = 1;
		graph[b][a] = 1;
	});
	let answer = Infinity;
	wires.forEach(([a, b]) => {
		graph[a][b] = 0;
		graph[b][a] = 0;
		answer = Math.min(answer, check(graph, n));
		graph[a][b] = 1;
		graph[b][a] = 1;
	});
	return answer;
};
