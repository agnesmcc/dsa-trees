/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;
    let minDepth;
    let depth = 1;
    let nodesToVisit = [this.root];
    while (nodesToVisit.length > 0) {
      let node = nodesToVisit.pop();
      if (!node.left && !node.right) {
        if (!minDepth || depth < minDepth) minDepth = depth;
        depth = 1;
      }
      if (node.left) nodesToVisit.push(node.left);
      if (node.right) nodesToVisit.push(node.right);
      depth++;
    }
    return minDepth;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;
    let maxDepth;
    let depth = 1;
    let nodesToVisit = [this.root];
    while (nodesToVisit.length > 0) {
      let node = nodesToVisit.pop();
      if (!node.left && !node.right) {
        if (!maxDepth || depth > maxDepth) maxDepth = depth;
        depth -= 1;
      }
      if (node.left) nodesToVisit.push(node.left);
      if (node.right) nodesToVisit.push(node.right);
      depth++;
    }
    return maxDepth;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    if (!this.root) return 0;
    let maxSum = -Infinity;
    function maxSumHelper(node) {
      if (!node) return 0;
      let leftSum = Math.max(maxSumHelper(node.left), 0);
      let rightSum = Math.max(maxSumHelper(node.right), 0);
      let currentSum = node.val + leftSum + rightSum;
      maxSum = Math.max(maxSum, currentSum);
      return node.val + Math.max(leftSum, rightSum);
    }
    maxSumHelper(this.root);
    return maxSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;
    let valuesSeen = [];
    let nodesToVisit = [this.root];
    while (nodesToVisit.length > 0) {
      let node = nodesToVisit.pop();
      valuesSeen.push(node.val);
      if (node.left) nodesToVisit.push(node.left);
      if (node.right) nodesToVisit.push(node.right);
    }
    valuesSeen.sort();
    for (let i = 0; i < valuesSeen.length; i++) {
      // console.log(valuesSeen[i], lowerBound);
      if (valuesSeen[i] > lowerBound) return valuesSeen[i];
    }
    return null;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
