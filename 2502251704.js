// 금과 은 운반하기
solution(10, 10, [100], [100], [7], [10]); // 50
solution(90, 500, [70, 70, 0], [0, 0, 500], [100, 100, 2], [4, 8, 1]); // 499

function solution(a, b, g, s, w, t) {
	let left = 0;
	let right = 1111111111111111;
	let answer = right;

	// 이분탐색
	while (left < right) {
		let mid = Math.floor((left + right) / 2); // 걸릴 예상 시간
		if (can_tranport_in_time(mid, a, b, g, s, w, t)) {
			right = mid;
			answer = Math.min(answer, mid);
		} else {
			left = mid + 1;
		}
	}

	can_tranport_in_time(answer, a, b, g, s, w, t, true);

	console.log("answer", answer);
	return answer;
}

function can_tranport_in_time(mid, a, b, g, s, w, t, print) {
	let total_g, total_s, total;
	total_g = total_s = total = 0;

	g.map((v, i) => {
		let max_trips = Math.floor(mid / (2 * t[i])); // 예상시간 동안 가져올 수 있는 최대 왕복 횟수
		let remainder_trip = Math.floor(mid / t[i]) % 2; // 홀수 시간일 때 편로도 한 번 더 가져올 수 있음.

		// max_trips * w[i] + remainder_trip * w[i] : 예상시간동안 가져올 수 있는 최대량
		let max_g = Math.min(g[i], max_trips * w[i] + remainder_trip * w[i]); // 예상시간동안 가져올 수 있는 금 최대량
		let max_s = Math.min(s[i], max_trips * w[i] + remainder_trip * w[i]); // 예상시간동안 가져올 수 있는 은 최대량
		let max_total = Math.min(g[i] + s[i], max_trips * w[i] + remainder_trip * w[i]); // 예상시간동안 가져올 수 있는 금,은 최대량

		if (print) {
			console.log(i, "도시", "max_g", max_g, "max_s", max_s, "max_total", max_total);
		}

		total_g += max_g;
		total_s += max_s;
		total += max_total;
	});

	if (print) {
		console.log("total_g", total_g, "total_s", total_s, "total", total);
	}

	return total_g >= a && total_s >= b && total >= a + b;
}
