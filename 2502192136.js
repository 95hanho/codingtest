solution([1, 3, 4, 6]);
solution([1, 7, 1, 2]);

function solution(food) {
  var answer = "0";
  let left = "";
  let right = "";

  food.map((v, i) => {
    if (i == 0) return;
    const count = Math.floor(v / 2);
    if (count > 0) {
      left = left + ("" + i).repeat(count);
      right = ("" + i).repeat(count) + right;
    }
  });

  answer = left + answer + right;
  console.log(answer);
  return answer;
}
