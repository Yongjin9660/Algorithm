// https://programmers.co.kr/learn/courses/30/lessons/1844

const solution = (maps) => {
	const N = maps.length;
	const M = maps[0].length;

	const dx = [0, 0, 1, -1];
	const dy = [1, -1, 0, 0];
	const q = [[0, 0, 1]];

	while (q.length !== 0) {
		const [nowY, nowX, count] = q.shift();
		if (nowY === N - 1 && nowX === M - 1) return count;
		for (let i = 0; i < 4; i++) {
			const nextY = nowY + dy[i];
			const nextX = nowX + dx[i];
			if (nextY < 0 || nextY >= N || nextX < 0 || nextX >= M) continue;
			if (maps[nextY][nextX] === 1) {
				q.push([nextY, nextX, count + 1]);
				maps[nextY][nextX] = 0;
			}
		}
	}
	return -1;
};
