solution(10, 10, [100], [100], [7], [10]); // 50
solution(90, 500, [70, 70, 0], [0, 0, 500], [100, 100, 2], [4, 8, 1]); // 499

function solution(a, b, g, s, w, t) {
	var answer = 0;

	const efficiency = get_efficiency();
	console.log(efficiency);

	function get_efficiency() {
		return w
			.map((v, i) => [v / t[i], i])
			.sort((a, b) => b[0] - a[0])
			.map((v) => v[1]);
	}

	// 효율 계산 = 필요총량 /
	// answer을

	let count = 0;
	while (a == 0 && b == 0 && count < 10) {
		answer++;
		count++;
		answer += carry(efficiency[0]);
		let time = 0;

		for (let i = 1; i < efficiency.length; i++) {}

		console.log(a, b, g, s, w, t);

		function carry(index) {
			let truck = w[index];
			let gold = truck < g[index] ? truck : g[index];
			truck = truck - gold;
			g[index] -= gold;
			a -= gold;
			let silver = truck < s[index] ? truck : s[index];
			truck = truck - silver;
			s[index] -= silver;
			b -= silver;
			return t[index];
		}
	}

	return answer;
}
