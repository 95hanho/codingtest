solution(9, [
	[1, 3],
	[2, 3],
	[3, 4],
	[4, 5],
	[4, 6],
	[4, 7],
	[7, 8],
	[7, 9],
]); // 3
solution(4, [
	[1, 2],
	[2, 3],
	[3, 4],
]); // 0
solution(7, [
	[1, 2],
	[2, 7],
	[3, 7],
	[3, 4],
	[4, 5],
	[6, 7],
]); // 1

function solution(n, wires) {
	var answer = -1;

	const path = {};
	const start_list = [];
	wires.map((v) => {
		start_list.push(v[0]);
		if (path[v[0]]) path[v[0]].push(v[1]);
		else path[v[0]] = [v[1]];
		if (path[v[1]]) path[v[1]].push(v[0]);
		else path[v[1]] = [v[0]];
	});

	const visited = new Array(n);
	let routes = [];
	start_list.map((start) => {
		visited.fill(false);
		DFS(start, []);
	});

	function DFS(node, r_list) {
		if (visited[node - 1]) return;
		const copy_list = r_list.slice(0);
		copy_list.push(node);
		visited[node - 1] = true;
		if (path[node].every((go_node) => visited[go_node - 1])) {
			if (routes.length == 0 || routes[0].length == copy_list.length) {
				routes.push(copy_list);
			} else if (routes.length > 0 && routes[0].length < copy_list.length) {
				routes = [];
				routes.push(copy_list);
			}
		} else {
			path[node].map((go_node) => {
				DFS(go_node, copy_list);
			});
		}
	}
	console.log("routes", routes);

	let cut_type = [];

	routes.map((route) => {
		// 짝수
		if (route.length % 2 == 0) {
			let a = route[route.length / 2 - 1];
			let b = route[route.length / 2];
			if (!cut_type.some((v) => v[0] == a && v[1] == b)) {
				cut_type.push([a, b]);
			}
		}
		// 홀수
		else {
			const half = Math.floor(route.length / 2);
			let a = route[half - 1];
			let b = route[half];
			let c = route[half + 1];
			if (cut_type.length == 0 || !cut_type.some((v) => v[0] == a && v[1] == b)) {
				cut_type.push([a, b]);
			}
			if (!cut_type.some((v) => v[0] == b && v[1] == c)) {
				cut_type.push([b, c]);
			}
		}
	});

	console.log(cut_type);

	let result = [];
	cut_type.map((v) => {
		let a = v[0];
		let b = v[1];
		const remake_path = { ...path };
		remake_path[a].filter((v2) => v2 != a);
		remake_path[b].filter((v2) => v2 != b);
	});
	function DFS_nodecount(node, r_list) {
		if (visited[node - 1]) return;
		const copy_list = r_list.slice(0);
		copy_list.push(node);
		visited[node - 1] = true;
		if (path[node].every((go_node) => visited[go_node - 1])) {
			if (routes.length == 0 || routes[0].length == copy_list.length) {
				routes.push(copy_list);
			} else if (routes.length > 0 && routes[0].length < copy_list.length) {
				routes = [];
				routes.push(copy_list);
			}
		} else {
			path[node].map((go_node) => {
				DFS(go_node, copy_list);
			});
		}
	}

	answer = Math.min(...result);

	console.log("answer", answer);
	return answer;
}
// console.log(Math.abs(-13)); // 절댓값 테스트
