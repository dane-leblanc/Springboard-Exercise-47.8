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
    if (!this.root) return 0;

    let toVisitStack = [this.root];
    let sum = this.root.val;

    while (toVisitStack.length) {
      let current = toVisitStack.pop();
      for (let child of current.children) {
        toVisitStack.push(child);
        sum += child.val;
      }
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;

    let toVisitStack = [this.root];
    let count = 0;
    if (this.root.val % 2 === 0) count++;

    while (toVisitStack.length) {
      let current = toVisitStack.pop();
      for (let child of current.children) {
        toVisitStack.push(child);
        if (child.val % 2 === 0) count++;
      }
    }
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;

    let toVisitStack = [this.root];
    let count = 0;
    if (this.root.val > lowerBound) count++;

    while (toVisitStack.length) {
      let current = toVisitStack.pop();
      for (let child of current.children) {
        toVisitStack.push(child);
        if (child.val > lowerBound) count++;
      }
    }
    return count;
  }
}

module.exports = { Tree, TreeNode };
