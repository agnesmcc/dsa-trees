/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (this.root == null) return 0;
    let nodesToVisit = [this.root];
    let sum = 0;
    while (nodesToVisit.length > 0) {
      let node = nodesToVisit.pop();
      sum += node.val;
      for (let child of node.children) {
        nodesToVisit.push(child);
      }
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (this.root == null) return 0;
    let nodesToVisit = [this.root];
    let count = 0;
    while (nodesToVisit.length > 0) {
      let node = nodesToVisit.pop();
      if (node.val % 2 === 0) {
        count++;
      }
      for (let child of node.children) {
        nodesToVisit.push(child);
      }
    }
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (this.root == null) return 0;
    let nodesToVisit = [this.root];
    let count = 0;
    while (nodesToVisit.length > 0) {
      let node = nodesToVisit.pop();
      if (node.val > lowerBound) {
        count++;
      }
      for (let child of node.children) {
        nodesToVisit.push(child);
      }
    }
    return count;
  }
}

module.exports = { Tree, TreeNode };
