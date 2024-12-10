// import { Tree } from "./tree.mjs";

function knightMoves(start, end) {
    let path = [start];

    let tree = new createNode(start, generateMoveList(start));
    console.log('tree1', tree)

    function recursiveCheckForEnd(current) {
        let moveList = generateMoveList(current.value);
        if(checkIfContains(moveList, end) === true) {
            console.log('You made it!');
            return
        } else {
            let newPossibleMoves = current.possibleMoves.map((element) => {
                return new createNode(element, generateMoveList(element));
            });
            current.possibleMoves = newPossibleMoves;
            // current = current.possibleMoves
        }

        // current.possibleMoves.forEach((element) => {
        //     return recursiveCheckForEnd(element)
        // })
    }
    recursiveCheckForEnd(tree);
    console.log('tree', tree);

    // function buildTree(current) {
    //     // if (path.length > 1) {
    //     //     path.push(current);
    //     //     console.log('path', path)
    //     // }
    //     const possibleMoves = generateMoveList(current);
    //     console.log('current:', current, ',  possibleMoves:', possibleMoves);
        
    //     if (checkIfContains(possibleMoves, end) === true) {
    //         path.push(` -> [${end}]`);
    //         const count = path.length - 1;
    //         return `You made it in ${count} moves! Here's your path: ${path}`;
    //     } else {
    //         const node = createNode(current, possibleMoves);
            
    //         if (tree.length == 0) {
    //             tree.push(node);
    //         };

    //         // console.log('node', node, 'possiblemove', node.possibleMoves[1]);
    //         // replace node with value in tree array
    //         node.possibleMoves.forEach((move) => {
    //             move = buildTree(move);
    //         })
    //         console.log('tree', tree)
    //         // return buildTree()
    //     }
    // }
    // return buildTree(start)
    // return buildTree()
    // console.log('tree root', tree.root)
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



knightMoves([0,0], [0,2])
// console.log(generateMoveList([2,1]))