function Graph() {
    this.adj = {}
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

// Queue class 
class Queue {
    // Array is used to implement a Queue 
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item)
    }
    dequeue(item) {
        if(!this.isEmpty){
        return this.items.shift(item);
        } else {
            return 'underflow'
        }
    }
    isEmpty() {
        return this.items.length == 0;
    }
}

Graph.prototype.bfs = function (startingNode) {

    // create a visited object 
    var visited = {};

    // Create an object for queue 
    var q = new Queue();
    // add the starting node to the queue 
    visited[startingNode] = true;
    q.enqueue(startingNode);
console.log(q)
    // loop until queue is element 
    // while (!q.isEmpty()) {
    //     // get the element from the queue 
    //     var getQueueElement = q.dequeue();

    //     // passing the current vertex to callback funtion 
    //     console.log(getQueueElement);

    //     // get the adjacent list for current vertex 
    //     var get_List = this.adj[getQueueElement];

    //     // loop through the list and add the element to the 
    //     // queue if it is not processed yet 
    //     for (var i in get_List) {
    //         var neigh = get_List[i];

    //         if (!visited[neigh]) {
    //             visited[neigh] = true;
    //             q.enqueue(neigh);
    //         }
    //     }
    // }
}
graph.bfs('A')

