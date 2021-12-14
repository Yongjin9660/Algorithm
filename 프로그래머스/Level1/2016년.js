// https://programmers.co.kr/learn/courses/30/lessons/12901

const solution = (a, b) => {
	const months = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	let day = b;
	for (let i = 1; i < a; i++) {
		day += months[i];
	}
	const days = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
	return days[day % 7];
};
