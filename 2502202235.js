// solution(10, 10, [100], [100], [7], [10]); // 50
solution(90, 500, [70, 70, 0], [0, 0, 500], [100, 100, 2], [4, 8, 1]); // 499

function solution(a, b, g, s, w, t) {
	var answer = 0;

	const efficiency = get_efficiency();

	function get_efficiency() {
		const list = [];
		w.map((v, i) => {
			list.push([i, 100 * (v / t[i])]);
		});
		list.sort((a, b) => b[1] - a[1]);
		return list.map((v) => v[0]);
	}

	const truck = new Array(g.length).fill(null);
	while (a > 0 || b > 0) {
		let min_time;
		efficiency.map((index) => {
			// 실기
			if (truck[index] == null && (g[index] > 0 || s[index] > 0)) {
				truck[index] = carry(index);
			}
			// 도착 밑 돌려보내기
			if (truck[index] == null) return;
			min_time = Math.min(...truck.map((v) => (v ? v[3] : 99)));
			truck[index][3] = truck[index][3] - min_time;
			if (truck[index][4] == "go" && truck[index][3] == 0) {
				a -= truck[index][0];
				b -= truck[index][1];
				if (a > 0 || b > 0) {
					truck[index] = [0, 0, truck[index][2], truck[index][2], "back"];
				}
			}
			if (truck[index][4] == "back" && truck[index][3] == 0) {
				truck[index] = null;
			}
		});

		answer += min_time;
	}

	function carry(index) {
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

	return answer;
}
