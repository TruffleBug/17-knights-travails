class Node {
    constructor(value, possibleMoves = null) {
        this.value = value,
        this.possibleMoves = possibleMoves
    }
}

class Tree {
    constructor(current) {
        this.root = new Node(current, this.generateMoveList(current))
    }

    // makes tree & returns level-0 root node
    // buildTree(current) {
    //     const children = [];
    //     const moveList = this.generateMoveList(current);
    //     const tree = moveList.forEach(element => {
    //         children.push(new Node(element));
    //     });
    //     tree.possibleMoves = children;
    //     return tree;
    // }

    // returns array of all possible moves from vertice
    generateMoveList(vertice) {
        const possibleMoves = [
            [-2, -1],
            [-2, 1],
            [-1, -2],
            [-1, 2],
            [1, -2],
            [1, 2],
            [2, -1],
            [2, 1],
        ];
        let adjacencyList = [];
        possibleMoves.forEach((move) => { 
            if (vertice[0] + move[0] < 0 || vertice[1] + move[1] < 0) {
                return;
            };
            adjacencyList.push([vertice[0] + move[0], vertice[1] + move[1]]);
        });
        return adjacencyList;
    }

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

    // calls callback on each node using breadth-first traversal method
    levelOrder(callback, current = this.root) {
        if(!callback) throw new Error('Callback function required.');
        if(!current) return;
        
        let queue = [current];
        while (queue.length > 0) {
            const node = queue.shift();
            callback(node)
            // node.value = callback(node.value);

            if(node.leftChild) queue.push(node.leftChild);
            if(node.rightChild) queue.push(node.rightChild);
        };
    }

//     // returns number of edges from given node to tree's root
    depth(value, node = this.root, depth = 0) {
        if(this.find(value) == 'Value does not exist.') return 'Value does not exist';
        if(value === node.value) return depth;

        if(value < node.value) return this.depth(value, node.leftChild, depth + 1);
        if(value > node.value) return this.depth(value, node.rightChild, depth + 1);
    }
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


