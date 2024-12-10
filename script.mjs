function knightMoves(start, end) {
    
    let tree = new createNode(start)
    let path = levelOrder(tree, end); 

    return `You made it in ${path.length} moves! \nHere's your path: ${path.join(' -> ')}`
};

// returns array of all possible moves from vertice
function generateMoveList(vertice, path) {
    const moveConfig = [
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
    moveConfig.forEach((element) => { 
        const move = ([vertice[0] + element[0], vertice[1] + element[1]])

        if (move[0] < 0 || move [1] < 0 || move[0] > 7 || move [1] > 7) {
            return;
        } 
        
        path.forEach((element) => {
            if(JSON.stringify(element) == JSON.stringify(move)) {
                return;
            }
        })

        // if (vertice[0] + element[0] < 0 || vertice[1] + element[1] < 0) {
            //     return;
            // };
            
        adjacencyList.push(move);

        // adjacencyList.push([vertice[0] + element[0], vertice[1] + element[1]]);
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

// // calls callback on each node using breadth-first traversal method
function levelOrder(tree, end) {  
    let queue = [{ node: tree, path: []}];

    while (queue.length > 0) {
        const {node, path} = queue.shift();

        if(JSON.stringify(node.value) == JSON.stringify(end)) {
            return path.concat(`[${node.value}]`);
        };

        if(!node.possibleMoves) {
            let startChildrenNode = [];
            generateMoveList(node.value, path).forEach(element => {
                startChildrenNode.push(new createNode(element));
            });
            node.possibleMoves = startChildrenNode;
        };

        for(const child of node.possibleMoves) {
            queue.push({ node: child, path: path.concat(`[${node.value}]`) })
        };
    };
};

console.log(knightMoves([6,5], [5,2]));