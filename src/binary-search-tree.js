const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor (data) {
      this.data = data;
      this.left = null;
      this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.rootElem = null;
  }

  root() {
   return this.rootElem;
  }

  add(data) {
    this.rootElem = addWithin(this.rootElem, data);

    function addWithin(node, data) {


    
      if (!node) {
        return node = new Node(data);
      }
      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return searchWithin(this.rootElem, data);

    function searchWithin(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }

      return data < node.data
        ? searchWithin(node.left, data)
        : searchWithin(node.right, data);
    }
  }

  find(data) {
    if(this.has(data)) {
         if (this.rootElem.data === data) {return data}

    doLeft(this.rootElem, cb(data));
    function doLeft(node, cb) {
      if (node) {
        doLeft(node.left, cb(data));
        cb(node.value);
        doLeft(node.right, cb(data));
      }
    }
    doRight(this.rootElem, cb(data));
    function doRight(node, cb) {
      if (node) {
        doRight(node.right, cb(data));
        cb(node.value);
        doRight(node.left, cb(data));
      }
    }
    function cb(value) {
      if (value === data) {return data};
    }
    }

  return null;

  }

  remove(data) {
    this.root = removeNode(this.rootElem, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.rootElem) {
      return;
    }

    let node = this.rootElem;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.rootElem) {
      return;
    }

    let node = this.rootElem;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};