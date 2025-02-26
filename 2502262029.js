// 전력망을 둘로 나누기
solution(9, [
  [1, 3],
  [2, 3],
  [3, 4],
  [4, 5],
  [4, 6],
  [4, 7],
  [7, 8],
  [7, 9]
]); // 3
solution(4, [
  [1, 2],
  [2, 3],
  [3, 4]
]); // 0
solution(7, [
  [1, 2],
  [2, 7],
  [3, 7],
  [3, 4],
  [4, 5],
  [6, 7]
]); // 1

function solution(n, wires) {
  var answer = 100;

  const path = {};
  const start_list = [];
  wires.map((v) => {
    start_list.push(v[0]);
    if (path[v[0]]) path[v[0]].push(v[1]);
    else path[v[0]] = [v[1]];
    if (path[v[1]]) path[v[1]].push(v[0]);
    else path[v[1]] = [v[0]];
  });

  const visited = new Array(n);
  let a_result = 0;
  let b_result = 0;
  let a = 0;
  let b = 0;
  wires.map((wire) => {
    a = wire[0];
    b = wire[1];
    a_result = 0;
    b_result = 0;
    visited.fill(false);
    DFS(a, true);
    DFS(b, false);
    answer = Math.min(answer, Math.abs(a_result - b_result));
  });

  function get_count(is_a) {
    if (is_a) a_result++;
    else b_result++;
  }
  function DFS(node, is_a) {
    if (visited[node - 1]) return;
    get_count(is_a);
    visited[node - 1] = true;
    path[node].map((go_node) => {
      if (!(node == a && go_node == b) && !(node == b && go_node == a))
        DFS(go_node, is_a);
    });
  }
  // console.log("answer", answer);
  return answer;
}
// console.log(Math.abs(-13)); // 절댓값 테스트
