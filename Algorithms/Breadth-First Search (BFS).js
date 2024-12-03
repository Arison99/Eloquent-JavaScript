function bfs(graph, start) {
    let visited = new Set();
    let queue = [start];
    while (queue.length > 0) {
        let node = queue.shift();
        if (!visited.has(node)) {
            console.log(node);
            visited.add(node);
            queue.push(...graph[node]);
        }
    }
}