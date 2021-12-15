// https://programmers.co.kr/learn/courses/30/lessons/17680

const solution = (cacheSize, cities) => {
	let answer = 0;
	const cache = [];
	cities
		.map((city) => city.toLowerCase())
		.forEach((city) => {
			if (cache.includes(city)) {
				answer += 1;
				const idx = cache.indexOf(city);
				cache.splice(idx, 1);
				cache.push(city);
			} else {
				answer += 5;
				if (cache.length < cacheSize) {
					cache.push(city);
				} else {
					if (cacheSize !== 0) {
						cache.splice(0, 1);
						cache.push(city);
					}
				}
			}
		});
	return answer;
};
