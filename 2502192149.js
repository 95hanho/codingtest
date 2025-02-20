solution(13, 17); // 43
solution(24, 27); // 52

function solution(left, right) {
  var answer = 0;

  for (let i = left; i <= right; i++) {
    const result = divisor_count(i);
    if (result % 2 == 0) answer += i;
    else answer -= i;
  }

  // console.log(answer);
  return answer;
}

function divisor_count(number) {
  if (number == 1) return 1;
  let divisor = {};
  over = false;
  while (!over) {
    let a = 2;
    while (number % a != 0 && a < number) {
      a++;
    }
    if (number == a) {
      over = true;
    }
    divisor[a] = divisor[a] ? divisor[a] + 1 : 1;
    number = number / a;
  }
  return Object.values(divisor).reduce((acc, cur) => acc * (cur + 1), 1);
}
