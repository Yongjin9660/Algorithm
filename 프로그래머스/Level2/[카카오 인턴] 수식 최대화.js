const permutations = (arr, num) => {
	const result = [];
	if (num === 1) return arr.map((a) => [a]);
	arr.forEach((a, idx) => {
		const restArr = arr.filter((_, i) => i !== idx);
		const permutaionArr = permutations(restArr, num - 1);
		const combineArr = permutaionArr.map((arr) => [...arr, a]);
		result.push(...combineArr);
	});
	return result;
};

const cal = (num1, num2, op) => {
	switch (op) {
		case '+':
			return num1 + num2;
		case '-':
			return num1 - num2;
		case '*':
			return num1 * num2;
		case '/':
			return parseInt(num1 / num2);
	}
};

const makeSplitArr = (expression) => {
	const result = [];
	let tempNum = '';
	expression.split('').forEach((a) => {
		if (a === '+' || a === '-' || a === '*' || a === '/') {
			result.push(Number(tempNum), a);
			tempNum = '';
		} else tempNum += a;
	});
	result.push(Number(tempNum));
	return result;
};

const getOperator = (expression) => {
	const result = [];
	expression.split('').forEach((a) => {
		if (a === '+' || a === '-' || a === '*' || a === '/') {
			if (result.includes(a) === false) result.push(a);
		}
	});
	return result;
};

const solution = (expression) => {
	let answer = -1;
	const splitArr = makeSplitArr(expression);
	const operator = getOperator(expression);

	permutations(operator, operator.length).map((arr) => {
		const tempSplitArr = [...splitArr];
		arr.forEach((op) => {
			while (tempSplitArr.includes(op)) {
				const idx = tempSplitArr.indexOf(op);
				const result = cal(tempSplitArr[idx - 1], tempSplitArr[idx + 1], op);
				tempSplitArr.splice(idx - 1, 3, result);
			}
		});
		answer = Math.max(answer, Math.abs(tempSplitArr[0]));
	});
	return answer;
};
