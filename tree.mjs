class Node {
    constructor(value) {
        this.value = value,
        this.children = 
    }
}

class Tree {
    constructor(array) {
        this.root = this.buildTree(array)
    }

    // makes tree & returns level-0 root node
    buildTree(array) {
        // console.log(array)
        const tree = array.forEach(element => {
            const node = new Node(element)
        });
        
        return tree;
    }
    
        // // sorts into balanced binary tree & returns level-0 root node
        // buildTree(array, startIndex = 0, endIndex = array.length - 1) {
        //     // console.log(array)
        //     if (startIndex > endIndex) return null;
            
        //     const midIndex = Math.floor((startIndex + endIndex) / 2);
        //     const root = new Node(array[midIndex]);
            
        //     root.leftChild = this.buildTree(array, startIndex, midIndex - 1);
        //     root.rightChild = this.buildTree(array, midIndex + 1, endIndex);
            
        //     return root;
        // }

//     // finds node with given value
//     find(value, current = this.root) {
//         if (!current) return 'Value does not exist.';

//         if (current.value === value) return current;
//         else if (value < current.value) {
//             return this.find(value, current.leftChild);
//         } else if (value > current.value) {
//             return this.find(value, current.rightChild);
//         };
//     }

//     // // finds parent of value
//     // findParent(value, current = this.root) {
//     //     if (!current) return null;

//     //     if (current.leftChild && current.leftChild.value === value) return current;
//     //     else if (current.rightChild && current.rightChild.value === value) return current;
//     //     else {
//     //         if (value < current.value) {
//     //             return this.findParent(value, current.leftChild);
//     //         } else if (value > current.value) {
//     //             return this.findParent(value, current.rightChild);
//     //         };
//     //     };
//     // }

//     // calls callback on each node using breadth-first traversal method
//     levelOrder(callback, current = this.root) {
//         if(!callback) throw new Error('Callback function required.');
//         if(!current) return;
        
//         let queue = [current];
//         while (queue.length > 0) {
//             const node = queue.shift();
//             callback(node)
//             // node.value = callback(node.value);

//             if(node.leftChild) queue.push(node.leftChild);
//             if(node.rightChild) queue.push(node.rightChild);
//         };
//     }

//     // returns number of edges from given node to tree's root
//     depth(value, node = this.root, depth = 0) {
//         if(this.find(value) == 'Value does not exist.') return 'Value does not exist';
//         if(value === node.value) return depth;

//         if(value < node.value) return this.depth(value, node.leftChild, depth + 1);
//         if(value > node.value) return this.depth(value, node.rightChild, depth + 1);
//     }
}


// // prints tree visual (given by TOD)
// function prettyPrint (node, prefix = "", isLeft = true) {
//     if (node === null) return;
//     if (node.rightChild !== null) {
//         prettyPrint(node.rightChild, `${prefix}${isLeft ? "│   " : "    "}`, false);
//     };
//     console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
//     if (node.leftChild !== null) {
//         prettyPrint(node.leftChild, `${prefix}${isLeft ? "    " : "│   "}`, true);
//     };
// };

export {Tree}


