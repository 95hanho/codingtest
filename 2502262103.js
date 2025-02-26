// 타겟넘버
solution([1, 1, 1, 1, 1], 3); // 5
solution([4, 1, 2, 1], 4); // 2

function solution(numbers, target) {
  var answer = 0;

  plus_minus(0, 0);

  function plus_minus(i, result) {
    if (i == numbers.length) {
      if (result == target) {
        answer++;
      }
      return;
    }
    let num = numbers[i];
    plus_minus(i + 1, result + num);
    plus_minus(i + 1, result - num);
  }

  // console.log("answer", answer);
  return answer;
}
