// 합승 택시 요금

solution(6, 4, 6, 2, [
	[4, 1, 10],
	[3, 5, 24],
	[5, 6, 2],
	[3, 1, 41],
	[5, 1, 24],
	[4, 6, 50],
	[2, 4, 66],
	[2, 3, 22],
	[1, 6, 25],
]); // 82
console.log("--");
solution(7, 3, 4, 1, [
	[5, 7, 9],
	[4, 6, 4],
	[3, 6, 1],
	[3, 2, 3],
	[2, 1, 6],
]); // 14
console.log("--");
solution(6, 4, 5, 6, [
	[2, 6, 6],
	[6, 3, 7],
	[4, 6, 7],
	[6, 5, 11],
	[2, 5, 12],
	[5, 3, 20],
	[2, 4, 8],
	[4, 3, 9],
]); // 18

function solution(n, s, a, b, fares) {
	var answer = 0;

	const path = {};
	const fare = {};
	fares.map((v) => {
		if (path[v[0]]) path[v[0]].push(v[1]);
		else path[v[0]] = [v[1]];
		if (fare[v[0]]) fare[v[0]][v[1]] = v[2];
		else {
			fare[v[0]] = {};
			fare[v[0]][v[1]] = v[2];
		}
		if (path[v[1]]) path[v[1]].push(v[0]);
		else path[v[1]] = [v[0]];
		if (fare[v[1]]) fare[v[1]][v[0]] = v[2];
		else {
			fare[v[1]] = {};
			fare[v[1]][v[0]] = v[2];
		}
	});
	// console.log("path", path);
	// console.log("fare", fare);

	// S -> A, S -> B 경로를 각 각 구함
	const A_path = [];
	const B_path = [];

	const visited = new Array(n).fill(false);
	dfs(s, [], visited);
	// console.log("A_path", A_path, "B_path", B_path);

	function dfs(node, cur_path, cur_visited) {
		if (cur_visited[node - 1]) return;
		const copy_path = [...cur_path];
		const copy_visited = [...cur_visited];
		copy_visited[node - 1] = true;
		copy_path.push(node);
		if (node == a) {
			console.log("in A_path :", copy_path);
			min_check(copy_path);
			A_path.push(copy_path, true);
		}
		if (node == b) {
			console.log("in B_path :", copy_path);
			min_check(copy_path);
			B_path.push(copy_path, false);
		}
		if (!path[node].every((go_node) => copy_visited[go_node - 1])) {
			path[node].map((go_node) => {
				dfs(go_node, copy_path, copy_visited);
			});
		}
	}
	function min_check(cur_path, is_A) {
		let result = 0;
		let compare_path = null;
		if (is_A) compare_path = B_path[B_path.length - 1];
		else compare_path = A_path[A_path.length - 1];

		const min_leng = cur_path.length >= compare_path.length ? compare_path.length : cur_path.length;
		for (let i = 0; i < min_leng; i++) {}

		answer = Math.min(answer, result);
	}

	return answer;
}
