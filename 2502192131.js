const morse = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z"
};

function solution(letter) {
  var answer = "";
  const str_list = letter.split(" ");
  str_list.map((str) => {
    answer += morse[str];
  });

  console.log(answer);
  return answer;
}

solution(".... . .-.. .-.. ---");
solution(".--. -.-- - .... --- -.");
