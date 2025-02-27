// 길 찾기 게임
solution([
  [5, 3],
  [11, 5],
  [13, 3],
  [3, 5],
  [6, 1],
  [1, 3],
  [8, 6],
  [7, 2],
  [2, 2]
]); // [[7,4,6,9,1,8,5,2,3],[9,6,5,8,1,4,3,2,7]]

function solution(nodeinfo) {
  class Tree {
    constructor(value, x, left, right) {
      this.value = value;
      this.x = x;
      this.children = [left, right];
    }
  }

  var answer = [[]];

  nodeinfo = nodeinfo.map((v, i) => {
    v.push(i + 1);
    return v;
  });
  nodeinfo.sort((a, b) => (b[1] - a[1] == 0 ? a[0] - b[0] : b[1] - a[1]));
  console.log(nodeinfo);
  const nodeobj = {};
  let max_depth = 0;
  nodeinfo.map((v) => {
    if (nodeobj[v[1]]) nodeobj[v[1]].push([v[0], v[2]]);
    else nodeobj[v[1]] = [[v[0], v[2]]];
  });
  console.log(nodeobj);

  const first = nodeinfo.shift();
  const tree = new Tree(first[2], first[0], null, null);

  make_tree(tree, first[1] - 1);

  function make_tree(node, in_dep) {
    if (in_dep == 0) return;
    let x = node.x;
    console.log("x", x, "in_dep", in_dep);
    if (nodeobj[in_dep] && nodeobj[in_dep].length > 0) {
      const child = nodeobj[in_dep].shift();
      const in_node = new Tree(child[1], child[0], null, null);
      if (!node.children[0] && child[0] < x) {
        node.children[0] = in_node;
        console.log(" => left:", child[0]);
        make_tree(in_node, in_dep - 1);
      } else if (!node.children[1] && x < child[0]) {
        node.children[1] = in_node;
        console.log(" => right:", child[0]);
        make_tree(in_node, in_dep - 1);
      } else {
        nodeobj[in_dep].unshift(child);
      }
      make_tree(node, in_dep);
    } else {
      make_tree(node, in_dep - 1);
    }
  }

  return answer;
}
