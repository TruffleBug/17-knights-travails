[0, 0] -> [2, 1] -> [0, 2]

- breadth first traversal 

- create function to generate adjacency list for a certain vertice
- create function to traverse adjacency list for next closest vertice
    - function should skip any vertice that has already been visited


GENERAL GIST
- let tree = new node w/ value of start & children = moveList

- using levelOrder traversal method, call callback on each node
    - if possibleMoves exists, push possibleMoves into queue

- callback = 
    - if value.possibleMoves does not exist,
        - value = end?
            - yes -> console.log('You made it!') & return
            - no -> create new node w/ value & children = moveList for each possible move
                - call levelOrder function recursively
    



FIND PATH
- function findPath(current = tree, end)
    - let path = [];
    - while current.possibleMoves exists,
        - current = current.possibleMoves
