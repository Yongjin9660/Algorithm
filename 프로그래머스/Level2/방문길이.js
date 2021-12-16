// https://programmers.co.kr/learn/courses/30/lessons/49994

const solution = (dirs) => {
	const history = {};
	let nowX = 0,
		nowY = 0;
	dirs.split('').forEach((d) => {
		switch (d) {
			case 'U':
				if (nowY < 5) {
					const nextX = nowX;
					const nextY = nowY + 1;
					const temp = [nowX, nowY, nextX, nextY];
					if (temp in history === false) history[temp] = 1;
					nowY++;
				}
				break;
			case 'D':
				if (nowY > -5) {
					const nextX = nowX;
					const nextY = nowY - 1;
					const temp = [nextX, nextY, nowX, nowY];
					if (temp in history === false) history[temp] = 1;
					nowY--;
				}
				break;
			case 'R':
				if (nowX < 5) {
					const nextX = nowX + 1;
					const nextY = nowY;
					const temp = [nowX, nowY, nextX, nextY];
					if (temp in history === false) history[temp] = 1;
					nowX++;
				}
				break;
			case 'L':
				if (nowX > -5) {
					const nextX = nowX - 1;
					const nextY = nowY;
					const temp = [nextX, nextY, nowX, nowY];
					if (temp in history === false) history[temp] = 1;
					nowX--;
				}
				break;
		}
	});
	return Object.keys(history).length;
};
