// https://programmers.co.kr/learn/courses/30/lessons/68936

const answer = [0, 0];

const check = (arr) => {
	if (arr.length === 1) {
		answer[arr[0]] += 1;
		return true;
	}
	const temp = arr[0][0];
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[i][j] !== temp) return false;
		}
	}
	answer[temp] += 1;
	return true;
};

const dfs = (arr) => {
	if (check(arr)) return;
	const len = arr.length;
	dfs(arr.slice(0, len / 2).map((a) => a.slice(0, len / 2)));
	dfs(arr.slice(0, len / 2).map((a) => a.slice(len / 2, len)));
	dfs(arr.slice(len / 2, len).map((a) => a.slice(0, len / 2)));
	dfs(arr.slice(len / 2, len).map((a) => a.slice(len / 2, len)));
};

const solution = (arr) => {
	dfs(arr);
	return answer;
};
