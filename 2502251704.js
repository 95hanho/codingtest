solution(10, 10, [100], [100], [7], [10]); // 50
// solution(90, 500, [70, 70, 0], [0, 0, 500], [100, 100, 2], [4, 8, 1]); // 499

function solution(a, b, g, s, w, t) {
	let left = 0;
	let right = 1111111111111111;
	let answer = right;

	// 이분탐색
	while (left < right) {
		let mid = Math.floor((left + right) / 2);
		if (can_tranport_in_time(mid, a, b, g, s, w, t)) {
			right = mid;
			console.log(mid);
			answer = Math.min(answer, mid);
		} else {
			left = mid + 1;
		}
	}

	console.log("answer", answer);
	return answer;
}

function can_tranport_in_time(mid, a, b, g, s, w, t) {
	let total_g, total_s, total;
	total_g = total_s = total = 0;

	g.map((v, i) => {
		let max_trips = Math.floor(mid / (2 * t[i]));
		let remainder_trip = Math.floor(mid / t[i]) % 2;

		let max_g = Math.min(g[i], max_trips * w[i] + remainder_trip * w[i]);
		let max_s = Math.min(s[i], max_trips * w[i] + remainder_trip * w[i]);
		let max_total = Math.min(g[i] + s[i], max_trips * w[i] + remainder_trip * w[i]);

		total_g += max_g;
		total_s += max_s;
		total += max_total;
	});

	return total_g >= a && total_s >= b && total >= a + b;
}
