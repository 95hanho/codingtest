solution([1, 2, 3, 4]); // 1
solution([1, 2, 7, 6, 4]); // 4
function solution(nums) {
	var answer = 0;

	const set = new Set();
	pickNum([], 0, nums);

	function pickNum(list, leng, num_list) {
		if (leng == 3) {
			list.sort();
			const join_str = list.join("-");
			if (!set.has(join_str)) {
				set.add(join_str);
				let sum = list.reduce((acc, cur) => acc + cur, 0);
				if (isPrime(sum)) answer++;
			}
			return;
		}
		for (let i = 0; i < num_list.length; i++) {
			const v = num_list[i];
			const in_list = [...list];
			in_list.push(v);
			const new_num_list = [...num_list];
			new_num_list.splice(i, 1);
			pickNum(in_list, leng + 1, new_num_list);
		}
	}
	function isPrime(num) {
		if (num < 2) return false;
		if (num == 2) return true;
		if (num % 2 == 0) return false;
		for (let i = 3; i <= Math.sqrt(num); i += 2) {
			if (num % i == 0) return false;
		}
		return true;
	}

	// console.log(answer);
	return answer;
}
