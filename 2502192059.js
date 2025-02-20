solution([-2, 3, 0, 2, -5]); //
solution([-3, -2, -1, 0, 1, 2, 3]); //
solution([-1, 1, -1, 1]); //

function solution(number) {
  var answer = 0;

  let set = new Set();

  const index_list = number.map((v, i) => i);
  make_group([], index_list);

  function make_group(list, arr) {
    if (list.length == 3) {
      list.sort();
      join_str = list.join("-");
      if (!set.has(join_str)) {
        set.add(join_str);
        const sum = list.reduce((acc, index) => acc + number[index], 0);
        if (sum == 0) answer++;
      }
      return;
    }
    if (arr.length > 0) {
      arr.map((v, i) => {
        const in_list = [...list];
        const in_arr = [...arr];
        in_list.push(v);
        in_arr.splice(i, 1);
        make_group(in_list, in_arr);
      });
    }
  }

  // console.log(answer);
  return answer;
}
