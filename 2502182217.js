function solution(record) {
  var answer = [];
  let result = [];
  let id_record = {};

  record.map((v, i, arr) => {
    const info = v.split(" ");
    const act = info[0];
    const id = info[1];
    let nick = info[2] || result.find((v2) => v2[1] == id)[2];
    if (act == "Enter") {
      result.push([`${nick}님이 들어왔습니다.`, id, nick]);
      if (!id_record[id]) id_record[id] = [result.length - 1];
      else {
        id_record[id].push(result.length - 1);
        change_nick(nick);
      }
    } else if (act == "Leave") {
      result.push([`${nick}님이 나갔습니다.`, id, nick]);
      if (!id_record[id]) id_record[id] = [result.length - 1];
      else id_record[id].push(result.length - 1);
    } else if (act == "Change") change_nick(nick);

    function change_nick(nick) {
      id_record[id].map((index) => {
        result[index][0] = result[index][0].replace(result[index][2], nick);
        result[index][2] = nick;
      });
    }
  });

  answer = result.map((v) => v[0]);
  return answer;
}

solution([
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan"
]);
// ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
