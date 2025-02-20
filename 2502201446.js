// solution(10, 10, [100], [100], [7], [10]); // 50
solution(90, 500, [70, 70, 0], [0, 0, 500], [100, 100, 2], [4, 8, 1]); // 499

function solution(a, b, g, s, w, t) {
  var answer = 0;

  const efficiency = get_efficiency();

  function get_efficiency() {
    const list = [];

    w.map((v, i) => {
      list.push(["g", i, 100 * (g[i] / v / t[i])]);
      list.push(["s", i, 100 * (s[i] / v / t[i])]);
    });

    list.sort((a, b) => b[2] - a[2]);
    return list.map((v) => [v[0], v[1]]);
  }

  // 효율 계산 = 필요총량 /
  // answer을

  console.log("efficiency", efficiency);
  let count = 0;
  while (a != 0 && b != 0 && count < 10) {
    answer++;
    count++;
		let time = 0;
    time += carry(efficiency[0][1], efficiency[0][0] == "g");

    console.log("answer, a, b", answer, a, b);
    for (let i = 1; i < efficiency.length; i++) {
			const next_index = efficiency[i][1];
			const isGold = efficiency[i][0] == "g";
			if(next_index = )
		}

    function carry(index, isGold) {
      let truck = w[index];
      if (isGold) {
        gold_carry();
        silver_carry();
      } else {
        silver_carry();
        gold_carry();
      }
      function gold_carry() {
        let gold = truck < g[index] ? truck : g[index];
        truck = truck - gold;
        g[index] -= gold;
        a -= gold;
      }
      function silver_carry() {
        let silver = truck < s[index] ? truck : s[index];
        truck = truck - silver;
        s[index] -= silver;
        b -= silver;
      }
      return t[index];
    }
    break;
  }

  return answer;
}
