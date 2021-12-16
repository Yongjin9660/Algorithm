// https://programmers.co.kr/learn/courses/30/lessons/49993

const solution = (skill, skill_trees) => {
	let answer = 0;
	skill_trees.forEach((tree) => {
		let temp = [];
		skill.split('').forEach((s) => temp.push(tree.indexOf(s)));
		temp = temp.map((a) => (a === -1 ? a + 1000 : a));
		const tt = [...temp];
		temp.sort();
		let check = true;
		for (let i = 0; i < tt.length; i++) {
			if (tt[i] !== temp[i]) {
				check = false;
				break;
			}
		}
		if (check) answer++;
	});
	return answer;
};
