solution("1 2 Z 3");
solution("10 20 30 40");
solution("10 Z 20 Z 1");
solution("10 Z 20 Z");
solution("-1 -2 -3 Z");

function solution(s) {
	var answer = 0;
	const str_list = s.split(" ");
	for (let i = 0; i < str_list.length; i++) {
		const cur = str_list[i];
		const next = str_list[i + 1];
		if (next != "Z") {
			answer += Number(cur);
		} else {
			i++;
		}
	}
	return answer;
}
