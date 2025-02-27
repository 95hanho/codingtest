// 길 찾기 게임
class Node {
  constructor(n, idx) {
    this.n = n;
    this.idx = idx;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
    this.preOrderVisited = [];
    this.postOrderVisited = [];
  }

  insert(n, idx) {
    const node = new Node(n, idx);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let current = this.root;
    while (current) {
      if (current.idx[0] > idx[0]) {
        if (current.left) current = current.left;
        else {
          current.left = node;
          break;
        }
      } else {
        if (current.right) current = current.right;
        else {
          current.right = node;
          break;
        }
      }
    }
  }

  preOrderTraversal(current) {
    this.preOrderVisited.push(current.n);
    if (current.left) {
      this.preOrderTraversal(current.left);
    }
    if (current.right) {
      this.preOrderTraversal(current.right);
    }
  }

  postOrderTraversal(current) {
    if (current.left) {
      this.postOrderTraversal(current.left);
    }
    if (current.right) {
      this.postOrderTraversal(current.right);
    }
    this.postOrderVisited.push(current.n);
  }
}

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
  var answer = [[]];
  const nodeObj = {};
  nodeinfo.forEach((e, idx) => {
    nodeObj[e[0] + "," + e[1]] = idx;
  });

  nodeinfo.sort((a, b) => {
    if (a[1] !== b[1]) return b[1] - a[1];
    else return a[0] - b[0];
  });

  const BST = new BinarySearchTree();
  for (let i = 0; i < nodeinfo.length; i++) {
    BST.insert(nodeObj[nodeinfo[i][0] + "," + nodeinfo[i][1]] + 1, nodeinfo[i]);
  }

  BST.preOrderTraversal(BST.root);
  BST.postOrderTraversal(BST.root);

  answer = [BST.preOrderVisited, BST.postOrderVisited];
  console.log("answer", answer);
  return [BST.preOrderVisited, BST.postOrderVisited];
}
