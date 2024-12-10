// import { Tree } from "./tree.mjs";

function knightMoves(start, end) {
    // let startChildrenNode = [];
    // generateMoveList(start).forEach(element => {
    //     startChildrenNode.push(new createNode(element));
    // });
    // let tree = new createNode(start, startChildrenNode);
    // console.log('ROOT OF TREE', tree);
    
    let tree = new createNode(start)
    console.log('ROOT OF TREE', tree);
    let path = [tree.value]
    let count = levelOrder(callback, tree, end); 

            // if (checkIfContains(possibleMoves, end) === true) {
            // path.push(` -> [${end}]`);
            // const count = path.length - 1;
            // return `You made it in ${count} moves! Here's your path: ${path}`;

    return `You made it in ${count} moves! \nHere's your path: ${path}`
    // function recursiveCheckForEnd(current) {
    //     let moveList = generateMoveList(current.value);
    //     if(checkIfContains(moveList, end) === true) {
    //         console.log('You made it!');
    //         return
    //     } else {
    //         let newPossibleMoves = current.possibleMoves.map((element) => {
    //             return new createNode(element, generateMoveList(element));
    //         });
    //         current.possibleMoves = newPossibleMoves;
    //     }
    // }
    // recursiveCheckForEnd(tree);
    // console.log('tree', tree);
};

// returns array of all possible moves from vertice
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

// factory function - new node
function createNode(value, possibleMoves = null) {
    return {
        value: value,
        possibleMoves: possibleMoves
    }
};

// checks if moves list array contains end
function checkIfContains(possibleMoves, end) {
    const possibleMovesString = JSON.stringify(possibleMoves);
    const endString = JSON.stringify(end);
    if(possibleMovesString.indexOf(endString) != -1) return true;
    return false;
};

// checks if specific value = end
function checkForEnd(value, end) {
    if(JSON.stringify(value) == JSON.stringify(end)) return 'YOU FOUND A PATH'
};

// calls callback on each node using breadth-first traversal method
function levelOrder(callback, tree, end) {  
    let queue = [tree];
    let count = 1;

    while (queue.length > 0) {
        const value = queue.shift();
        console.log('value', value.value);
        count++
        console.log('count', count)
        // callback(value, end);
        if(callback(value, end) === true) return count;

        queue = queue.concat(value.possibleMoves);
        // console.log('queue', queue)
    };
};

function callback(value, end, count) {
    if(!value.possibleMoves) {
        if(JSON.stringify(value.value) == JSON.stringify(end)) {
            return true;
        } else { 
            let startChildrenNode = [];
            generateMoveList(value.value).forEach(element => {
                startChildrenNode.push(new createNode(element));
            });
            value.possibleMoves = startChildrenNode;
        };
    };
};


console.log(knightMoves([0,0], [0, 2]));
// console.log(generateMoveList([2,1]))