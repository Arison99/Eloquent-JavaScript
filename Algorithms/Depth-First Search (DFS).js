function dfs(graph, start) {
    let visited = new Set();
    function dfsHelper(node) {
        if (!visited.has(node)) {
            console.log(node);
            visited.add(node);
            graph[node].forEach(neighbor => dfsHelper(neighbor));
        }
    }
    dfsHelper(start);
}