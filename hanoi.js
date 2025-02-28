// 하노이
/**
 *
 * @param {*} num 원판갯수
 * @param {*} from 어디서
 * @param {*} other
 * @param {*} to 어디로
 * @returns

*/
function Hanoi(num, from, to, other) {
	if (num === 0) {
		return;
	} else {
		// 위에 있는 원반이 이동하고자 하는 목적지를 제외한 한 곳에 모두 꽃혀있어야 된다.
		Hanoi(num - 1, from, other, to);
		answer.push([from, to]);
		// 다른 곳에 꽃혀있던 원반을 원래 목적지에 꽃는다.
		Hanoi(num - 1, other, to, from);
	}
}
