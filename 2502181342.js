function solution(jobs) {
	var answer = 0;
	jobs.map((job, i) => {
		job[2] = i;
	});

	let queue = [];
	let time = 0;
	let work = 0;
	let processing = null;
	function solution(jobs) {
		var answer = 0;
		jobs.map((job, i) => {
			job[2] = i;
		});

		let queue = [];
		let time = 0;
		let work = 0;
		let processing = null;
		let job_length = jobs.length;
		while (queue.length > 0 || work < job_length) {
			let delete_index = [];
			jobs.map((job, i) => {
				if (!processing && job[0] <= time) {
					queue.push(job);
					delete_index.push(i);
					work++;
				}
			});
			jobs = jobs.filter((v, i) => !delete_index.includes(i));
			delete_index = [];
			if (queue.length > 1) {
				queue.sort((a, b) => {
					if (a[1] > b[1]) return 1;
					else if (a[1] < b[1]) return -1;
					else {
						if (a[0] > b[0]) return 1;
						else if (a[0] < b[0]) return -1;
						else {
							if (a[2] > b[2]) return 1;
							else return -1;
						}
					}
				});
			}
			if (queue.length > 0) {
				processing = queue.splice(0, 1)[0];
				answer += time + processing[1] - processing[0];
				console.log(
					`${time}초 ${processing[2]}번 요청${processing[0]}초 도착${
						time + processing[1]
					}초 answer = ${answer}`
				);
				time += processing[1];
				processing = null;
			} else {
				time++;
			}
		}

		answer = Math.floor(answer / job_length);
		console.log(answer);
		return answer;
	}

	let job_length = jobs.length;
	while (queue.length > 0 || work < job_length) {
		let delete_index = [];
		jobs.map((job, i) => {
			if (!processing && job[0] <= time) {
				queue.push(job);
				delete_index.push(i);
				work++;
			}
		});
		jobs = jobs.filter((v, i) => !delete_index.includes(i));
		delete_index = [];
		if (queue.length > 1) {
			queue.sort((a, b) => {
				if (a[1] > b[1]) return 1;
				else if (a[1] < b[1]) return -1;
				else {
					if (a[0] > b[0]) return 1;
					else if (a[0] < b[0]) return -1;
					else {
						if (a[2] > b[2]) return 1;
						else return -1;
					}
				}
			});
		}
		if (queue.length > 0) {
			processing = queue.splice(0, 1)[0];
			answer += time + processing[1] - processing[0];
			console.log(
				`${time}초 ${processing[2]}번 요청${processing[0]}초 도착${
					time + processing[1]
				}초 answer = ${answer}`
			);
			time += processing[1];
			processing = null;
		} else {
			time++;
		}
	}

	answer = Math.floor(answer / job_length);
	console.log(answer);
	return answer;
}

solution([
	[0, 3],
	[1, 9],
	[3, 5],
]);
solution([
	[0, 3],
	[0, 9],
	[0, 5],
	[20, 5],
]);
