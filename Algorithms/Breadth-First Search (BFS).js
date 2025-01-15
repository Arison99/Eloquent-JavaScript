// Breadth-First Search (BFS) algorithm implementation
function bfs(graph, start) {
    // Set to keep track of visited nodes
    let visited = new Set();
    // Queue to manage the nodes to be explored
    let queue = [start];
    
    // Loop until there are nodes to be explored
    while (queue.length > 0) {
        // Dequeue the first node
        let node = queue.shift();
        
        // If the node has not been visited
        if (!visited.has(node)) {
            // Process the node (e.g., print it)
            console.log(node);
            // Mark the node as visited
            visited.add(node);
            // Enqueue all adjacent nodes
            queue.push(...graph[node]);
        }
    }
}

// Example usage
// Define a graph as an adjacency list
const graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
};

// Perform BFS starting from node 'A'
bfs(graph, 'A');