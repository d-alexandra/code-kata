/* Given a binary tree, return all root-to-leaf paths.
Note: A leaf is a node with no children.
Definition for a binary tree node.
function TreeNode (val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
 * @param {TreeNode} root
 * @return {string[]}
 */

// converts an array to string and adds ->
function modifyResult (data) {
  let str = ''
  let d = 0
  for (d = 0; d < data.length - 1; d++) {
    str = str.concat(data[d]).concat('->')
  }
  return str.concat(data[d])
}

/* stores the data in a data array and when it finds a leaf,
converts the array to a string with '->' and adds the result to the result array */

function traverse (node, data, result) {
  if (node && node.val) {
    data.push(node.val)
    if (node.left === undefined && node.right === undefined) {
      const str = modifyResult(data)
      result.push(str)
    }

    // traverses the left anf right nodes in recursion
    traverse(node.left, data, result)
    traverse(node.right, data, result)
    data.pop()
  }
}

var binaryTreePaths = function (root) {
  const data = []
  const result = []
  traverse(root, data, result)
  return result
}

/* my test console cases
class Node {
  constructor (data) {
    this.val = data
  }
}

class Tree {
  constructor (node) {
    this.root = node
  }
}
const tree = new Tree()
tree.root = new Node(1)
tree.root.left = new Node(2)
tree.root.right = new Node(3)
tree.root.right.left = new Node(null)
tree.root.right.right = new Node(5)
console.log(binaryTreePaths(tree.root))
* 
returns Array [ "1->2", "1->3->5" ]
*/
