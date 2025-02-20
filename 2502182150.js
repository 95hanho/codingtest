function solution(cards) {
  var answer = 0;

  const card_game = (pick, list) => {
    const group = [pick];
    while (list[pick - 1] && !group.includes(list[pick - 1])) {
      group.push(list[pick - 1]);
      console.log(`${pick}번 상자를 선택, ${list[pick - 1]}카드를 꺼냄`);
      pick = list[pick - 1];
    }
    console.log("group", group);
    return group;
  };
  cards.map((card, i, arr) => {
    let one = 0;
    let list = [...arr];
    let pick = card;
    // if (pick != 7) return;
    console.log(`첫 번 째 게임 ${pick}번 뽑음`);
    const one_result = card_game(pick, list);
    one = one_result.length;
    if (one < arr.length) {
      list = list.map((v) => (!one_result.includes(v) ? v : null));
      console.log("list", list);
      list.map((card2, i2, arr2) => {
        if (card2) {
          let two = 0;
          let list2 = [...arr2];
          console.log(`두 번 째 게임 ${card2}번 뽑음`);
          const two_result = card_game(card2, list2);
          two = two_result.length;
          console.log(`결과 = ${one * two}`);
          answer = answer < one * two ? one * two : answer;
        }
      });
    }
  });

  console.log("answer", answer);
  return answer;
}

solution([8, 6, 3, 7, 2, 5, 1, 4]);
