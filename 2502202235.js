// solution(10, 10, [100], [100], [7], [10]); // 50
// solution(90, 500, [70, 70, 0], [0, 0, 500], [100, 100, 2], [4, 8, 1]); // 499

function solution(a, b, g, s, w, t) {
	var answer = 0;

	let efficiency = get_efficiency();
	console.log("efficiency", efficiency);

	function get_efficiency() {
		const list = [];
		w.map((v, i) => {
			list.push([i, 100 * (v / t[i])]);
		});
		list.sort((a, b) => b[1] - a[1]);
		return list.map((v) => v[0]);
	}

	const truck = new Array(g.length).fill(0);
	let gogal = [];
	while (a > 0 || b > 0) {
		let min_time;
		efficiency.map((index, i) => {
			// 실기
			if (truck[index] == 0 && (g[index] > 0 || s[index] > 0)) {
				truck[index] = carry(index, i);
			}
		});
		min_time = Math.min(...truck.map((v) => v || 99));
		console.log("truck", truck, "a", a, "b", b, "answer", answer + min_time);
		if (gogal.length > 0) {
			efficiency = efficiency.filter((v, i) => !gogal.includes(i));
			console.log("cut", gogal, efficiency);
			gogal = [];
		}
		efficiency.map((index, i) => {
			// 도착 밑 돌려보내기
			if (!truck[index]) return;
			truck[index] = truck[index] - min_time;
		});

		answer += min_time;
	}

	function carry(index, effi_index) {
		let quantity = w[index];
		let gold = quantity < g[index] ? quantity : g[index];
		if (gold > a && g[index] > 0) gold = a;
		quantity = quantity - gold;
		g[index] -= gold;
		let silver = quantity < s[index] ? quantity : s[index];
		quantity = quantity - silver;
		if (silver > b && s[index] > 0) silver = b;
		s[index] -= silver;
		a -= gold;
		b -= silver;
		const complete = a == 0 && b == 0;
		const all_gogal = g[index] == 0 && s[index] == 0;
		const s_gogal = a == 0 && s[index] == 0;
		const g_gogal = b == 0 && g[index] == 0;
		if (complete || all_gogal || s_gogal || g_gogal) {
			gogal.push(effi_index);
			if (complete) return t[index];
			else return null;
		} else {
			return t[index] * 2;
		}
	}

	console.log("answer", answer);
	return answer;
}
