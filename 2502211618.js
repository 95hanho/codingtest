// solution(10, 10, [100], [100], [7], [10]); // 50
solution(90, 500, [70, 70, 0], [0, 0, 500], [100, 100, 2], [4, 8, 1]); // 499

function solution(a, b, g, s, w, t) {
	var answer = 0;

	const g_efficiency = get_g_efficiency();
	const s_efficiency = get_s_efficiency();

	function get_g_efficiency() {
		const list = [];
		w.map((v, i) => {
			list.push([i, 100 * (g[i] / v / t[i])]);
		});
		list.sort((a, b) => b[1] - a[1]);
		return list.map((v) => v[0]);
	}
	function get_s_efficiency() {
		const list = [];
		w.map((v, i) => {
			list.push([i, 100 * (s[i] / v / t[i])]);
		});
		list.sort((a, b) => b[1] - a[1]);
		return list.map((v) => v[0]);
	}

	console.log(g_efficiency, s_efficiency);

	// 조건
	// 도시마다 금 효율이 좋으면 금 먼저, 은 효율이 좋으면 은 먼저 가져온다.
	// 근데 예를 들어 금이면 효율이 좋은 트럭부터 출발시키는게??
	// 금부터 가져와서 총 걸린 시간
	// 은부터 가져와서 총 걸린 시간 비교해서 더 짧은게 답일듯??

	const truck = new Array(g.length).fill(null);
	let store_a = a;
	let store_b = b;
	//
	let g_time = 0;
	while (a > 0 || b > 0) {
		g_efficiency.map((index) => {
			// 실기
			if (truck[index] == null && (g[index] > 0 || s[index] > 0)) {
				truck[index] = carry_g(index);
			}
		});

		g_time++;
	}

	// 금 먼저
	function carry_g(index) {
		let quantity = w[index];
		let gold = quantity < g[index] ? quantity : g[index];
		if (gold > a && g[index] > 0) gold = a;
		quantity = quantity - gold;
		g[index] -= gold;
		let silver = quantity < s[index] ? quantity : s[index];
		quantity = quantity - silver;
		if (silver > b && s[index] > 0) silver = b;
		s[index] -= silver;
		return [gold, silver, t[index], t[index], "go"];
	}
	// 은 먼저저
	function carry_s(index) {
		let quantity = w[index];
		let silver = quantity < s[index] ? quantity : s[index];
		quantity = quantity - silver;
		if (silver > b && s[index] > 0) silver = b;
		s[index] -= silver;
		let gold = quantity < g[index] ? quantity : g[index];
		if (gold > a && g[index] > 0) gold = a;
		quantity = quantity - gold;
		g[index] -= gold;

		return [gold, silver, t[index], t[index], "go"];
	}

	return answer;
}
