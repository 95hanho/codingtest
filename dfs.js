// 깊이 우선 탐색
function DFS(node) {
	if (visited1[node - 1]) return;
	dfs_road.push(node);
	visited1[node - 1] = true;
	list[node]
		.sort((a, b) => a - b)
		.map((v) => {
			if (!visited1[v - 1]) DFS(v);
		});
}
