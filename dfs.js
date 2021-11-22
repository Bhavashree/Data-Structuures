function Graph() {
    this.adj = {};
}

Graph.prototype.addVertex = function (v) {
    this.adj[v] = [];
}

Graph.prototype.addEdge = function (v1, v2) {
    this.adj[v1].push(v2);
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('D', 'E');
graph.addEdge('C', 'E');
graph.addEdge('A', 'D');
graph.addEdge('A', 'C');
graph.addEdge('E', 'B');
graph.addEdge('D', 'A');

/* traversing */
Graph.prototype.dfs = function () {
    console.log(this.adj)
    const visited = {};
    const nodes = Object.keys(this.adj);
    for (const i in nodes) {
        graph.dfsUtil(nodes[i], visited)
    }
}

Graph.prototype.dfsUtil = function (node, visited) {
    if (!visited[node]) {
        visited[node] = true;
        const neibors = this.adj[node];
        for (const i in neibors) {
            const neibor = neibors[i];
            console.log('node', node + '----->' + neibor)
            graph.dfsUtil(neibor, visited)
        }
    }
}

Graph.prototype.detectCycle = function () {
    console.log(this.adj)
    const nodes = Object.keys(this.adj);
    const visited = {};
    const recStack = {};
    for (const i in nodes) {
        if (graph.detectCycleUtil(nodes[i], visited, recStack)) {
            return 'found cycle'
        }
        return 'not found cycle'
    }
}

Graph.prototype.detectCycleUtil = function (vertex, visited, recStack) {
    if (!visited[vertex]) {
        visited[vertex] = true;
        recStack[vertex] = true;
        const neibors = this.adj[vertex];
        for (const i in neibors) {
            const neibor = neibors[i];
            if (!visited[neibor] && this.detectCycleUtil(neibor, visited, recStack)) {
                return true
            } else if (recStack[neibor]) {
                return true;
            }
        }
    }
    recStack[vertex] = false;
    return false;
}


console.log(graph.detectCycle());