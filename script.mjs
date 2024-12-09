// import { Tree } from "./tree.mjs";

function knightMoves(current, end) {
    let path = [current];
    let tree = [];
    
    const buildTree = () => {
        // if (path.length > 1) {
        //     path.push(current);
        //     console.log('path', path)
        // }
        const possibleMoves = generateMoveList(current);
        console.log('current:', current, ',  possibleMoves:', possibleMoves);
        
        if (checkIfContains(possibleMoves, end) === true) {
            path.push(` -> [${end}]`);
            const count = path.length - 1;
            return `You made it in ${count} moves! Here's your path: ${path}`;
        } else {
            // create node with value: current, next: possibleMoves
            const node = createNode(current, possibleMoves);
            console.log('node', node);
            // replace node with value in tree array
            return buildTree()
        }
    }

    return buildTree()
};

function generateMoveList(vertice) {
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
};


function checkIfContains(possibleMoves, end) {
    const possibleMovesString = JSON.stringify(possibleMoves);
    const endString = JSON.stringify(end);
    if(possibleMovesString.indexOf(endString) != -1) return true;
    return false;
};

// factory function - new node
function createNode(current, possibleMoves) {
    return {
        current: current,
        possibleMoves: possibleMoves
    }
}

console.log(knightMoves([0,0], [2, 1]))
// console.log(generateMoveList([2,1]))