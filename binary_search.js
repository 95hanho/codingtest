// 이분탐색
function binary_search(a, b, g, s, w, t) {
	let left = 0;
	let right = 1111111111111111;
	let answer = right;

	while (left < right) {
		let mid = Math.floor((left + right) / 2); // 걸릴 예상 시간
		if (check_fnc()) {
			right = mid;
			answer = Math.min(answer, mid);
		} else {
			left = mid + 1;
		}
	}

	console.log("answer", answer);
	return answer;
}
