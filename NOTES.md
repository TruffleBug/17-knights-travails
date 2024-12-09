[0, 0] -> [7,2]
[]

- breadth first traversal 

- create function to generate adjacency list for a certain vertice
- create function to traverse adjacency list for next closest vertice
    - function should skip any vertice that has already been visited


- buildtree(current)
    - possibleMoves = [...]
    - does possibleMoves contain end?
        - if yes, return string
        - if no, 
            - create node from current & possible moves
            - for each possible move, 
                - possibleMoves = [...]
                - does possibleMoves contain end?
                - ...
// CHANGE TO RECURSIVE CASE BEING JUST BUILDTREE(DO NOT ANALYZE IF POSSIBLE MOVES CONTAINS END)


- function knightMoves(start, end)
    - let path = [start]
    - let tree = new Tree(start)
- buildtree(current)
    - possibleMoves = [...]
    - create node from current & possible moves
- recursive function: for each possible move element,
    <!-- - set possible move to current -->
    - does possible move = end?
        - if yes, return string
        - if no, 
            - element = new Tree(element)
    - recursive function
