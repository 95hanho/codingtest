function solution(cards) {
	var answer = 0;

	const card_game = (pick, list) => {
		const group = [pick];
		while (list[pick - 1] && !group.includes(list[pick - 1])) {
			group.push(list[pick - 1]);
			// console.log(`${pick}번 상자를 선택, ${list[pick - 1]}카드를 꺼냄`);
			pick = list[pick - 1];
		}
		// console.log("group", group);
		return group;
	};
	cards.map((card, i, arr) => {
		let one = 0;
		let list = [...arr];
		let pick = card;
		// if (pick != 7) return;
		// console.log(`첫 번 째 게임 ${pick}번 뽑음`);
		const one_result = card_game(pick, list);
		one = one_result.length;
		if (one < arr.length) {
			list = list.filter((v) => !one_result.includes(v));
			console.log("list", list);
			return;
			// 7번뽑기 [8, 6, 3, 7, 2, 5, 1, 4]
			// [1, 4, 7, 8]
			// 2번 그룹 [2, 3, 5, 6]
			//
			// [2, 5, 6]
			const made_list = [];
			const make_list = (in_list, leng) => {
				if (leng == list.length) {
					made_list.push(in_list);
					return;
				}
				list.map((v) => {
					const cur_list = [...in_list];
					if (!cur_list.includes(v)) {
						cur_list.push(v);
						make_list(cur_list, leng + 1);
					}
				});
			};
			make_list([], 0);
			// console.log("made_list", made_list);
			made_list.map((made) => {
				made.map((card2) => {
					let two = 0;
					if (card2 <= made.length) {
						// console.log(`두 번 째 게임 ${card2}번 뽑음`);
						const two_result = card_game(card2, made);
						two = two_result.length;
						// console.log(`결과 = ${one * two}`);
						answer = answer < one * two ? one * two : answer;
					}
				});
			});
		}
	});

	// console.log("answer", answer);
	return answer;
}

solution([8, 6, 3, 7, 2, 5, 1, 4]); //12

// 1 4 7 8 / 2 5 6
