function BFS(node) {
	let queue = [node];
	bfs_road.push(node);
	visited2[node - 1] = true;
	while (queue.length != 0) {
		let now = queue.shift();
		//console.log("queue", queue);
		//console.log("list[now]", list[now]);
		list[now]
			.sort((a, b) => a - b)
			.map((v) => {
				if (!visited2[v - 1]) {
					bfs_road.push(v);
					visited2[v - 1] = true;
					queue.push(v);
				}
			});
	}
}
